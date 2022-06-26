import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "../pages/recipe/recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShopingList } from "./shopinglist.service";


@Injectable()
export class RecipeService{
  constructor( private slService:ShopingList){

  }
          recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
        new Recipe(
          'A burger',
          'Sweet Burger in the world',
          'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJlY2lwZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500',
          
        ),
        new Recipe(
          'Biriyani',
          'Indian"s favorite recipe',
          'https://user-images.immediate.co.uk/bbcgoodfood/recipes/user-recipe/url_4.jpg?quality=90&resize=556,505'
        )
      ];
      getRecipe(){
        //  return this.recipes
          return this.recipes.slice()
      };

      addIngrediantsToShopingList(ingredient){
        this.slService.addIngredientes(ingredient);
      }
}