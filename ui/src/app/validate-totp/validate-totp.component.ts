import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HomeServiceService } from 'src/services/home-service.service';

@Component({
  selector: 'app-validate-totp',
  templateUrl: './validate-totp.component.html',
  styleUrls: ['./validate-totp.component.css']
})
export class ValidateTotpComponent implements OnInit {

  constructor( private homeService : HomeServiceService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  otp:number =0;

  validate():void{
    debugger;
    console.log(this.otp);
    console.log("------------------");
     let userid = JSON.stringify(localStorage.getItem("userId")).toString().trim();
     userid = JSON.parse(userid);
     console.log(userid);

    this.homeService.ValidateOTP(userid,this.otp).subscribe(result=>{
      console.log(result);
      if(result=="0")
      {
        this._snackBar.open("OTP is validated successfully!!.","Close",{
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      }
      else
      {
        this._snackBar.open("OTP is Expired..","Close",{
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      }

});
  }
}
