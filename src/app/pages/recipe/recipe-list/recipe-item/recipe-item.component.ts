import { Component, Input, OnInit,} from '@angular/core';
import { Recipe } from 'src/app/pages/recipe/recipe.model';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {
  @Input('receipes') receipes: Recipe;
  @Input('index') index:number;

  ngOnInit(): void {
  }


}
