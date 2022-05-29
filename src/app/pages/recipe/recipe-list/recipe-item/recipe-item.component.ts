import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input('receipes') receipes: Recipe;
  @Output() singleReceipe = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  onSelectReceipe(){
    this.singleReceipe.emit();
  }

}
