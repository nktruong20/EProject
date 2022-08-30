import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BodyStyleService } from '../service/body-style.service';
import { CategoryService } from '../service/category.service';
import { ColorService } from '../service/color.service';
import { IntColorService } from '../service/int-color.service';
import { ProductService } from '../service/product.service';
import { YearService } from '../service/year.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  menuVariable:boolean = false;
  listAllMileage:any;
  listAll:any;
  listProduct:any;
  listCategory:any;
  yearProduct:any;
  check:any;
  contactData:any;
  keyword:any;
  listBodyStyle:any;
  CatebodyStyle:any;
  CateColor:any;
  listColor:any;
  CateIntColor:any;
  listIntColor:any
  constructor(private productService:ProductService,private actRouter:ActivatedRoute,private categoryService:CategoryService,private yearService:YearService,private bodyStyle:BodyStyleService,private colorService:ColorService,private intColor:IntColorService) { }
  
  ngOnInit(): void {
    document.documentElement.scrollTop = 0;
    this.check = localStorage.getItem("nameCar")
    if(this.check){
      this.contactData = JSON.parse(this.check)
    }
    let id:any;
    this.actRouter.paramMap.subscribe(params => {
      id = params.get('id');
      if (id == 1 || id ==2 || id==3||id==4||id==5||id==6) {
        this.productService.getFilterList(id).subscribe((data:any) => {
          this.listProduct = data;
        });
      } else {
        this.productService.getAll().subscribe((data) => {
          this.listProduct = data;
        });
      }
    });
    this.categoryService.getAllCat().subscribe((data)=>{
      this.listCategory = data;
    })
    this.yearService.getAll().subscribe((data)=>{
      this.yearProduct = data ;
    })
    this.bodyStyle.getAllBody().subscribe((data)=>{
      this.CatebodyStyle = data ;
    })
    this.colorService.getAllColor().subscribe((data)=>{
      this.CateColor = data ;
    })
    this.intColor.getAllInt().subscribe((data)=>{
      this.CateIntColor = data ;
    })
    this.productService.getAll().subscribe((data)=>{
      this.listAll = data;
    })
    this.productService.getAll().subscribe((data)=>{
      this.listBodyStyle = data;
    })
    this.productService.getAll().subscribe((data)=>{
      this.listColor = data;
    })
    
    this.productService.getAll().subscribe((data)=>{
      this.listIntColor = data;
    })
    
  }
  findYear(year:number):void{
     this.listProduct = this.listAll.filter((item:any)=>{
      return item.year == year;
    })
    if(year){
      localStorage.setItem("nameCar",JSON.stringify(year))
    }
  }
  findBodyStyle(bodyStyle:any):void{
    this.listProduct = this.listBodyStyle.filter((item:any)=>{
      return item.bodyStyle == bodyStyle;
    })
  }
  findColor(extColor:any):void{
    this.listProduct = this.listColor.filter((item:any)=>{
      return item.extColor== extColor;
    })
  }
  findIntColor(intColor:any):void{
    this.listProduct = this.listIntColor.filter((item:any)=>{
      return item.intColor== intColor;
    })
  }
  openMenu(){
    let menu = document.getElementById('modalMobile') as HTMLDivElement | null;
    menu?.classList.remove("d-none");
  }
  closeMenuMobile(){
    let menu = document.getElementById('modalMobile') as HTMLDivElement | null;
    menu?.classList.add("d-none");
  }
}
