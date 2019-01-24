import { Component, OnInit } from '@angular/core';
import {RecipeService} from "../../shared/services/recipe.service";
import {Recipe} from "../../shared/models/Recipe";

@Component({
  selector: 'app-recipe-card-component',
  templateUrl: './recipe-card-component.component.html',
  styleUrls: ['./recipe-card-component.component.sass']
})
export class RecipeCardComponentComponent implements OnInit {

  recipes: Recipe[];

  constructor(
    private recipeService : RecipeService
  ) { }

  ngOnInit() {
    this.getAll()
  }
  getAll(){
    this.recipeService.getAll().subscribe((res: any)=>{
      this.recipes = res
    })
  }

  remove(recipe: Recipe) {
    // @ts-ignore
    this.recipeService.delete(recipe._id).subscribe(() => {
      this.getAll()
    })
  }
}
