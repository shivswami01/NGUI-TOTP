import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { DialogData } from '../DialogData';
import { HomeServiceService } from 'src/app/home-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-otp-dialog',
  templateUrl: './otp-dialog.component.html',
  styleUrls: ['./otp-dialog.component.css']
})
export class OtpDialogComponent implements OnInit {

  longText:any;
  generatedOTP:any;
  constructor(
    public dialogRef: MatDialogRef<OtpDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private homeService : HomeServiceService,
    private _snackBar: MatSnackBar
  ) {
    this.generatedOTP = this.data.otp;
    console.log(data);
  }

  timeLeft: number = 30;
  progressBar :number = 10;
  interval:any;

  ngOnInit(): void {
    this.startTimer();
  }
  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
        this.progressBar = this.progressBar+3;
      } else {
        this.pauseTimer();
        this.homeService.OTPExpiredAcknowledge(this.data.otp).subscribe(result=>{
          this._snackBar.open("OTP is expired, please regenerate the OTP.","Close",{
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
          this.generatedOTP = "- - - - - -";
        })
      }
    },1000)
  }
  pauseTimer() {
    clearInterval(this.interval);
  }
    submit(){
      this.dialogRef.close();
    }

    close(){
      this.dialogRef.close();
    }

}
