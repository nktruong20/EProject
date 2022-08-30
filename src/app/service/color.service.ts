import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const urlAPI = "http://localhost:3000/color"
@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(private http:HttpClient) { }
  getAllColor():Observable<any[]>{
    return this.http.get<any[]>(`${urlAPI}`)
  }
}
