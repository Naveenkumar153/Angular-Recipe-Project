import { Component, OnInit,Input } from '@angular/core';
import { Recipe } from 'src/app/pages/recipe/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  @Input() getTheReceipeData:Recipe;
  constructor(
    private recipeSerivce:RecipeService,
  ) { }

  ngOnInit(): void {
    console.log(this.getTheReceipeData)
  };

  onAddToShoppingList(){
    console.log(this.getTheReceipeData);
    this.recipeSerivce.addIngrediantsToShopingList(this.getTheReceipeData);
    // this.recipeSerivce.addIngrediantsToShopingList(this.getTheReceipeData.);

  }

}
