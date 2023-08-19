import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  constructor(
    private http: HttpClient
  ) { }

  GetOTPFromUIAPIService(userId:string, selectedDateTime: string):Observable<any>
  {
    let payload = this.http.get(`https://localhost:7166/api/home?userId=${userId}&sDate=${selectedDateTime}`);
    console.log(payload);
    return payload;
  }
}
