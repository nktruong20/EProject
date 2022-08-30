import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listCate:any;

  constructor(private categoryService:CategoryService,private http:HttpClient,private actRoute:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this.categoryService.getAllCat().subscribe((data)=>{
      this.listCate = data;
    })
  }
  navigator(id:number){
    return this.route.navigate([`/shop/${id}`])
  }

}
