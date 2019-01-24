import { Component, OnInit } from '@angular/core';
import {RecipeService} from "../../shared/services/recipe.service";
import {Recipe} from "../../shared/models/Recipe";
import {ActivatedRoute, Params} from "@angular/router";
import {switchMap} from "rxjs/operators";
import {of} from "rxjs";

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.sass']
})
export class RecipePageComponent implements OnInit {

  constructor(private recipeServices : RecipeService,
              private  route: ActivatedRoute) { }
  recipe : Recipe;
  ngOnInit() {
    this.route.params.pipe(switchMap((params : Params) =>{
        if(params['id']){
          return  this.recipeServices.getById(params['id']);
        }
        return of(null);
      })
    ).subscribe((res)=>{
      if (res){
        this.recipe = res;
      }
    });
  }

}
