import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ingredient } from 'src/common/models/ingredient.model';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe | null = null;
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.recipe = this.recipeService.getRecipe(id);
    });

    // this.recipeService.recipeObservable$.subscribe((data) => {
    //   this.recipe = data;
    // });
  }

  sendToShoppingList(ingredients: Ingredient[]) {
    this.recipeService.sendToShoppingList(ingredients);
  }
}
