import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { Recipe } from 'src/app/pages/recipe/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
   getTheReceipeData:Recipe;
   id:number;
  constructor(
    private recipeSerivce:RecipeService,
    private router:Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log(this.getTheReceipeData);
    this.route.params.subscribe((id:Params) => {
      console.log(+id['id']);
       this.id = +id['id'];
       this.getTheReceipeData = this.recipeSerivce.getRecipes(this.id);
    })
  };

  onRecipeEdit(){
    // this.router.navigate(['edit'],{relativeTo:this.route});
    this.router.navigate(['../',this.id,'edit'],{relativeTo:this.route});
  }

  onAddToShoppingList(){
    console.log(this.getTheReceipeData);
    this.recipeSerivce.addIngrediantsToShopingList(this.getTheReceipeData);

  }

}
