import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Ingredient } from 'src/common/models/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(1, 'Dal Chawal', 'Yellow Dal and white chawal', [
      new Ingredient('dal', 20),
      new Ingredient('chawal', 50),
    ]),
    new Recipe(2, 'Rajma Chawal', 'red rajma and white chawal', [
      new Ingredient('rajma', 20),
      new Ingredient('chawal', 50),
    ]),
    new Recipe(3, 'kadhi Chawal', 'Yellow kadhi and white chawal', [
      new Ingredient('kadhi', 20),
      new Ingredient('chawal', 50),
    ]),
  ];

  recipeObservable$ = new Subject<Recipe>();

  constructor(private shoppingList: ShoppingListService) {}

  getRecipes() {
    return [...this.recipes];
  }

  sendToShoppingList(ingredients: Ingredient[]) {
    this.shoppingList.addToList(ingredients);
  }

  getRecipe(id: number): Recipe | null {
    const response = this.recipes.find((recipe) => recipe.id === id);
    return response ? response : null;
  }
}
