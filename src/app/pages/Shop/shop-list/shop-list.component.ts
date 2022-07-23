import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShopingList } from 'src/app/services/shopinglist.service';

import { Ingredient } from '../../../shared/ingredient.model';
@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit,OnDestroy {

  ingredients: Ingredient[] = [];
  private subscription:Subscription;

  constructor(
    private slService: ShopingList,
  ) { 

  }

  ngOnInit(): void {
    this.slService.getIngredients();
   this.subscription =  this.slService.ingrediantChanged.subscribe((ingredent:Ingredient[]) => {
      this.ingredients = ingredent;
    })
  }
  ngOnDestroy():void{
    this.subscription.unsubscribe();
  }
  // addRecipe(value){
  //   this.ingredients.push(value);
  //   console.log(value);
  // }
}
