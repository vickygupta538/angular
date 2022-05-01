import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  { path: 'shopping-list', component: ShoppingListComponent },
  {
    path: 'recipe',
    component: RecipeComponent,
    children: [
      {
        path: ':id', // child route path
        component: RecipeDetailComponent, // child route component that the router renders
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
