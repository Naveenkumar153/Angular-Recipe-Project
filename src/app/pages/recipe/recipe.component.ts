import { Component,OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from 'src/app/pages/recipe/recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
  providers:[RecipeService]
})
export class RecipeComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
    // console.log(this.selectedRecipe);
    // // debugger;
    // this.recipeService.recipeSelected.subscribe((recipe) => {
    //   this.selectedRecipe = recipe;
    //   console.log('recipe component',this.selectedRecipe)
    // })
  }


}
