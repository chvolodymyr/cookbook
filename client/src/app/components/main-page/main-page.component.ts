import { Component, OnInit } from '@angular/core';
import {RecipeService} from "../../shared/services/recipe.service";
import {Recipe} from "../../shared/models/Recipe";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass']
})
export class MainPageComponent implements OnInit {
  loading: boolean = false;
  recipies: Recipe[];
  constructor(private recipeService : RecipeService) { }

  ngOnInit() {
    this.loading = false;
    this.getAll()
  }


  getAll(){
    this.loading = true;
    this.recipeService.getAll().subscribe((res: any)=>{
      this.loading = false;
      this.recipies = res
    })}
}
