import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {

  ingredients: Ingredient[] = [
    // new Ingredient('Bananna',10),
    // new Ingredient('Bananna',10),
    // new Ingredient('Bananna',10),
    // new Ingredient('Bananna',10),
    // new Ingredient('Bananna',10),
    // new Ingredient('Bananna',10),
    // new Ingredient('Bananna',10),
  ];

  constructor() { }

  ngOnInit(): void {
  }
  addRecipe(value){
    this.ingredients.push(value);
    console.log(value);
  }
}
