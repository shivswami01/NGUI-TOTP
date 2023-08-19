import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HomeServiceService } from '../home-service.service';
import {OtpDialogComponent} from "./otp-dialog/otp-dialog.component";
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeService : HomeServiceService, private dialog: MatDialog) { }
   error:any = "";
   otp:any =0;
   form: FormGroup = new FormGroup({
    UserID: new FormControl(''),
    Date: new FormControl(''),
  });


  ngOnInit(): void {
  }
  Submit():void
  {
   const userId = this.form.get("UserID")?.value;
    if(userId ==""  || userId == undefined)
    {
     alert("Please enter valid user id.");
     return;
    }
   const { formattedDate, formattedTime } = this.formatDateAndTime(this.form.get("Date")?.value);
   const selectedDateTime = formattedDate + " " + formattedTime;
   console.log(selectedDateTime);
   if(selectedDateTime.includes("NaN") || selectedDateTime == undefined || selectedDateTime == "")
   {
    alert("Please enter valid date.");
    return;
   }
    this.homeService.GetOTPFromUIAPIService(userId, selectedDateTime).subscribe(result=>{
      console.log(result);
      this.otp =result;
        const dialogRef = this.dialog.open(OtpDialogComponent, {
          data: {otp: result},
         });
        dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        });
    });
  }

  formatDateAndTime(inputDate: string): { formattedDate: string; formattedTime: string } {
    const selectedDate = new Date(inputDate);

    // Format date in "MMDDYY" format
    const formattedDate = `${(selectedDate.getMonth() + 1).toString().padStart(2, '0')}/${selectedDate.getDate().toString().padStart(2, '0')}/${selectedDate.getFullYear().toString()}`;

    // Format time in "HH:mm" format
    const formattedTime = `${selectedDate.getHours().toString().padStart(2, '0')}:${selectedDate.getMinutes().toString().padStart(2, '0')}:${selectedDate.getSeconds().toString().padStart(2, '0')}`;

    return {
        formattedDate,
        formattedTime,
    };
}

}
