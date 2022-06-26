import { Component, OnInit } from '@angular/core';
import { ShopingList } from 'src/app/services/shopinglist.service';

import { Ingredient } from '../../../shared/ingredient.model';
@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {

  ingredients: Ingredient[] = [];

  constructor(
    private slService: ShopingList
  ) { 

  }

  ngOnInit(): void {
    this.slService.getIngredients();
    this.slService.ingrediantChanged.subscribe((ingredent:Ingredient[]) => {
      this.ingredients = ingredent;
    })
  }
  // addRecipe(value){
  //   this.ingredients.push(value);
  //   console.log(value);
  // }
}
