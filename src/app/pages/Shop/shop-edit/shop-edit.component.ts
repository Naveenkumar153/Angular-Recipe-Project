import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shop-edit',
  templateUrl: './shop-edit.component.html',
  styleUrls: ['./shop-edit.component.scss']
})
export class ShopEditComponent implements OnInit {
  @Output() ingrediant = new EventEmitter<Ingredient>();;

  constructor() { }

  ngOnInit(): void {
  }

  onAddIngrediant(name:string,amount:number){
      const ingrediant = new Ingredient(name,amount);
      this.ingrediant.emit(ingrediant);
  }

}
