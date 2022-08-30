import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const urlAPI = "http://localhost:3000/category_id"

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  getAllCat():Observable<any[]>{
    return this.http.get<any[]>(`${urlAPI}`)
  }
 
}
