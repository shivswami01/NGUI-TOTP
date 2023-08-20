import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HomeServiceService } from '../../services/home-service.service';
import {OtpDialogComponent} from "./otp-dialog/otp-dialog.component";
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeService : HomeServiceService, private dialog: MatDialog,private _snackBar: MatSnackBar) { }
   error:any = "";
   otp:any =0;
   todayDate:Date = new Date();
   form: FormGroup = new FormGroup({
    UserID: new FormControl(''),
    Date: new FormControl(''),
  });

  ngOnInit(): void {
  }

  submit():void
  {
   const userId = this.form.get("UserID")?.value;
    if(userId ==""  || userId == undefined)
    {
     this._snackBar.open("Pleaser enter valid user Id.","Close",{
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 5000,
    });
     return;
    }
   const { formattedDate, formattedTime } = this.formatDateAndTime(this.form.get("Date")?.value);
   const selectedDateTime = formattedDate + " " + formattedTime;
   if(selectedDateTime.includes("NaN") || selectedDateTime == undefined || selectedDateTime == "")
   {
    this._snackBar.open("Please enter valid date.","Close",{
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 5000,
    });
    return;
   }
   try{
    this.homeService.GetOTPFromUIAPIService(userId, selectedDateTime).subscribe(result=>{
      console.log(result);
      if(result == -1)
      {
        this._snackBar.open("User Id is not valid, please enter the valid User Id.","Close",{
          horizontalPosition: 'center',
          verticalPosition: 'top',
          duration: 5000,
        });
        return;
      }
      if(result != null)
      {
        this.otp =result;
        const dialogRef = this.dialog.open(OtpDialogComponent, {
          data: {otp: result},
         });
        dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        });
      }
      else
      {
        alert("Server error...");
      }
    });
   }
   catch(exception)
   {
    alert(exception);
   }

  }

  //Convert the string into date
  formatDateAndTime(inputDate: string): { formattedDate: string; formattedTime: string } {
    const selectedDate = new Date(inputDate);
    const formattedDate = `${(selectedDate.getMonth() + 1).toString().padStart(2, '0')}/${selectedDate.getDate().toString().padStart(2, '0')}/${selectedDate.getFullYear().toString()}`;
    const formattedTime = `${selectedDate.getHours().toString().padStart(2, '0')}:${selectedDate.getMinutes().toString().padStart(2, '0')}:${selectedDate.getSeconds().toString().padStart(2, '0')}`;
    return {
        formattedDate,
        formattedTime,
    };
}

}
