import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from 'src/app/data';
import { NgxSpinnerService } from "ngx-spinner";
//import { SpinnerService } from 'src/app/component/spinner/spinner.service'

@Injectable({
  providedIn: 'root'
})
export class FileInputService {
  private baseUrl1 = "http://127.0.0.1:600/MLbased" //sending to server
  private baseUrl2 = "C:/Users/tsahay/Desktop/data/data_3.csv" //displaying

  constructor(private httpClient: HttpClient) { }

  getProvidersList():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseUrl1}`);
  }

  FileInput(file:any): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl1}`, file)
  }
}
