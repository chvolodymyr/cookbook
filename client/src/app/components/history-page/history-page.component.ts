import { Component, OnInit } from '@angular/core';
import {RecipeService} from "../../shared/services/recipe.service";
import {HistoryService} from "../../shared/services/history.service";
import {switchMap} from "rxjs/operators";
import {ActivatedRoute, Params} from "@angular/router";
import {of} from "rxjs";
import {Recipe} from "../../shared/models/Recipe";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.sass']
})
export class HistoryPageComponent implements OnInit {


versions : Recipe[];

  constructor(
    private route : ActivatedRoute,
    private recipies : RecipeService,private history : HistoryService) { }

  ngOnInit() {
    this.route.params.pipe(switchMap((params : Params) =>{
        if(params['id']){
          return  this.history.getByCategoryId(params['id']);
        }
        return of(null);
      })
    ).subscribe((res)=>{

      this.versions = res;
        console.log(this.versions)
    });

    }

}
