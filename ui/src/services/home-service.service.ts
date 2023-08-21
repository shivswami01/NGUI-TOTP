import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { Observable,throwError } from 'rxjs';
import { NotificationService } from 'src/services/notification.service';
import { catchError } from 'rxjs/operators';
import { ErrorHandlerService } from 'src/services/error-handler.service';
@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  constructor(private readonly notificationService: NotificationService,
    private http: HttpClient, private errorHandler: ErrorHandlerService
  ) { }

  GetOTPFromUIAPIService(userId:string, selectedDateTime: string):Observable<number>
  {
   let payload =  this.http.get<any>(`https://localhost:7166/api/home?userId=${userId}&sDate=${selectedDateTime}`)
    .pipe(catchError((error: HttpErrorResponse) => {
      this.errorHandler.handleError('An error occurred while fetching data: ' + error.message);
      alert(error.message);
      return throwError(error);
    }));
    console.log(payload);
    return payload;
  }

  OTPExpiredAcknowledge(userid:string, otp:number):Observable<any>
  {
    let data =  {UserID: userid, OTP: otp}
    return this.http.post(`https://localhost:7166/api/ManageOTP/Expireotp`,data)
    .pipe(catchError((error: HttpErrorResponse) => {
      this.errorHandler.handleError('An error occurred while fetching data: ' + error.message);
      alert(error.message);
      return throwError(error);
    }));
  }

  ValidateOTP(userid:string,otp:number):Observable<any>
  {
    let data =  {UserID: userid, OTP: otp}
    return this.http.post(`https://localhost:7166/api/ManageOTP/ValidateOTP`,data)
    .pipe(catchError((error: HttpErrorResponse) => {
      this.errorHandler.handleError('An error occurred while fetching data: ' + error.message);
      return throwError(error);
    }));
  }
}
