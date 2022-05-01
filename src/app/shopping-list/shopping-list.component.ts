import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/common/models/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe((ingredientList) => {
      this.ingredients = ingredientList;
    });
  }

  addToShoppingList(ingredient: Ingredient) {
    this.shoppingListService.addIngredient(ingredient);
  }
}
