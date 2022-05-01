import { EventEmitter } from '@angular/core';
import { Ingredient } from 'src/common/models/ingredient.model';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter();
  private ingredients: Ingredient[] = [
    new Ingredient('salt', 20),
    new Ingredient('chillies', 10),
    new Ingredient('Jira', 30),
  ];

  getIngredients() {
    return [...this.ingredients];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit([...this.ingredients]);
  }

  addToList(ingredients: Ingredient[]) {
    this.ingredients = this.ingredients.concat(ingredients);
    this.ingredientsChanged.emit([...this.ingredients]);
  }
}
