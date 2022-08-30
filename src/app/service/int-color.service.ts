import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const urlAPI = "  http://localhost:3000/intColor"
@Injectable({
  providedIn: 'root'
})
export class IntColorService {

  constructor(private http:HttpClient) { }

  getAllInt():Observable<any[]>{
    return this.http.get<any[]>(`${urlAPI}`)
  }
}
