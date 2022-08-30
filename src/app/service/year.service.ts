import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const urlAPI  = "http://localhost:3000/yearProduct"

@Injectable({
  providedIn: 'root'
})
export class YearService {

  constructor(private http:HttpClient) { }

  getAll():Observable<any[]>{
    return this.http.get<any[]>(`${urlAPI}`)
  }
}
