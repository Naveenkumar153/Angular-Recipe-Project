import { Component, OnInit, } from '@angular/core';
import { RecipeService } from '../../../services/recipe.service';

// modules
import { Recipe } from 'src/app/pages/recipe/recipe.model'; 
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
  // providers: [RecipeService]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  constructor( 
    private recipeService: RecipeService,
    private router:Router,
    private route:ActivatedRoute,
   ) { }

  ngOnInit(): void {
    console.log(this.recipes)
    this.recipes = this.recipeService.getRecipe();
    console.log(this.recipes)
  }

  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo:this.route})
  }

}
