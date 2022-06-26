import { Component,OnInit } from '@angular/core';
import { ShopingList } from 'src/app/services/shopinglist.service';
// import { Ingredient } from '../../../shared/ingredient.model';
import { Ingredient } from '../../../shared/ingredient.model';

@Component({
  selector: 'app-shop-edit',
  templateUrl: './shop-edit.component.html',
  styleUrls: ['./shop-edit.component.scss']
})
export class ShopEditComponent implements OnInit {

  constructor(
    private slIngrediant:ShopingList
  ) { }

  ngOnInit(): void {
  }

  onAddIngrediant(name:string,amount:number){
      const ingrediant = new Ingredient(name,amount);
      this.slIngrediant.addIngredients(ingrediant);
  }

}
