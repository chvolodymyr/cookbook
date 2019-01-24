import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from "./components/main-page/main-page.component";
import {RecipePageComponent} from "./components/recipe-page/recipe-page.component";
import {CreateRecipeComponent} from "./components/create-recipe/create-recipe.component";
import {HistoryPageComponent} from "./components/history-page/history-page.component";

const routes: Routes = [
  {path : '', component: MainPageComponent},
  {path: 'recipe/history/:id', component: HistoryPageComponent},
  {path: 'recipe/:id', component: RecipePageComponent},
  {path: 'create/new', component: CreateRecipeComponent},
  {path: 'create/:id', component: CreateRecipeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
