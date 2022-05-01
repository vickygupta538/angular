import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/common/models/ingredient.model';

@Component({
  selector: 'app-shoping-item',
  templateUrl: './shoping-item.component.html',
  styleUrls: ['./shoping-item.component.css'],
})
export class ShopingItemComponent implements OnInit {
  ingredient = {
    name: '',
    amount: '',
  };

  @Output()
  addToShoppingList = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  addIngredient(ingredientForm: Ingredient) {
    console.log(ingredientForm);

    this.addToShoppingList.emit(ingredientForm);
  }
}
