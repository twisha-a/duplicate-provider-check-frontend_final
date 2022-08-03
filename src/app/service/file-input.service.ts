import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from 'src/app/data';

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
  //sending input to server but right now in csv format; make changes for json format
  FileInput(file:any): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl1}`, file);
  }
}
