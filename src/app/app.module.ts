import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppHeader } from './components/Base/header/header.component';
import { FooterComponent } from './components/Base/footer/footer.component';
import { RecipeComponent } from './pages/recipe/recipe.component';
import { RecipeDetailComponent } from './pages/recipe/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './pages/recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './pages/recipe/recipe-list/recipe-item/recipe-item.component';
import { ShopListComponent } from './pages/Shop/shop-list/shop-list.component';
import { ShopEditComponent } from './pages/Shop/shop-edit/shop-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeader,
    FooterComponent,
    RecipeComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShopListComponent,
    ShopEditComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
