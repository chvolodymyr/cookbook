import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CreateRecipeComponent } from './components/create-recipe/create-recipe.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { RecipePageComponent } from './components/recipe-page/recipe-page.component';
import { RecipeCardComponentComponent } from './components/recipe-card-component/recipe-card-component.component';
import {MDBBootstrapModule} from "angular-bootstrap-md";
import { LoaderComponent } from './components/main-page/loader/loader.component';
import { HistoryPageComponent } from './components/history-page/history-page.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateRecipeComponent,
    MainPageComponent,
    RecipePageComponent,
    RecipeCardComponentComponent,
    LoaderComponent,
    HistoryPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
