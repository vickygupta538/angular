import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { ShopingItemComponent } from './shopping-list/shoping-item/shoping-item.component';
import { AppRoutingModule } from './app-routing.module';
import { RecipeService } from './recipe/recipe.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    ShopingItemComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [RecipeService, ShoppingListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
