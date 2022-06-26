import { Component, Input, OnInit,} from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from 'src/app/pages/recipe/recipe.model';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {
  @Input('receipes') receipes: Recipe;
  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
  }

  onSelectReceipe(){  
    this.recipeService.recipeSelected.emit(this.receipes);
    console.log(this.receipes);
  }

}
