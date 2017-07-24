import { Component, OnInit } from '@angular/core';
import { AllProductComponent } from '../all-product/all-product.component'

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  arr:String[]= [
    "Akshay",
    "David",
    "Hazard",
    "Deigo",
    "Pedro",
    "Morata"
  ];

  public productDetails:AllProductComponent[]=[];
 
  constructor() {
  }

  ngOnInit() {
    
    this.productDetails[0] = new AllProductComponent(1,"Mobile","Motorola G4 Plus Black",15000);
    this.productDetails[1] = new AllProductComponent(2,"Laptop","Lenovo G510 Black",38000);
    this.productDetails[2] = new AllProductComponent(3,"Camera","Canon 700D Black",45000);


  
  }

}
