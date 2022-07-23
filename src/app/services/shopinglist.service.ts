
import { Subject } from 'rxjs';
import { Ingredient } from "../shared/ingredient.model";


export class ShopingList{
  public ingrediantChanged = new Subject<Ingredient[]>();
  private  ingredients: Ingredient[] = [
     new Ingredient('Bananna',10),
    new Ingredient('Bananna',10),
  ];

  getIngredients(){
    this.ingredients.slice();
  }

  addIngredients(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    console.log('ingredient',ingredient);
    this.ingrediantChanged.next(this.ingredients.slice());
  };

  addIngredientes(ingredient){
    this.ingredients.push(...ingredient);
    this.ingrediantChanged.next(this.ingredients.slice());
  }
}




