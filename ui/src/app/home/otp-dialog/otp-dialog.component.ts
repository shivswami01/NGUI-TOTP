import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { DialogData } from '../DialogData';
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
  ) {
    this.generatedOTP = this.data.otp;
    console.log(data);
  }


  ngOnInit(): void {

  }
    Submit(){
      this.dialogRef.close();
    }

    Close(){
      this.dialogRef.close();
    }

}
