import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const urlAPI = " http://localhost:3000/bodyStyle"

@Injectable({
  providedIn: 'root'
})
export class BodyStyleService {

  constructor(private http:HttpClient) { }

  getAllBody():Observable<any[]>{
    return this.http.get<any[]>(`${urlAPI}`)
  }
}
