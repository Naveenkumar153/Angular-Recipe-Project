import { Component, OnInit } from '@angular/core';

// modules
import { Recipe } from '../recipe.model'; 

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A burger',
      'Sweet Burger in the world',
      'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJlY2lwZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500'
    ),
    new Recipe(
      'A burger',
      'Sweet Burger in the world',
      'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJlY2lwZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500'
    )
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
