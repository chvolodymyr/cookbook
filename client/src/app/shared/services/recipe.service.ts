import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Recipe} from "../models/Recipe";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(
   private http: HttpClient
  ) { }

  getById(id: string):Observable<Recipe>{
    return this.http.get<Recipe>(`api/recipe/${id}`)
  };


  getAll():Observable<Recipe[]>{
    return this.http.get<Recipe[]>(`api/recipe`)
  }
  create(recipe: Recipe, image: File):Observable<Recipe>{
    const fd = new FormData();

      fd.append('image',image,image.name);

    // @ts-ignore
    fd.append('category', recipe.category);
    // @ts-ignore
    fd.append('_id',recipe._id);
    // @ts-ignore
    fd.append('date',recipe.date);
    // @ts-ignore
    fd.append('description',recipe.description);
    // @ts-ignore
    fd.append('title',recipe.title);
    fd.append('portions',recipe.portions);
    fd.append('time',recipe.time);
    // @ts-ignore
    fd.append('dificaltly',recipe.difficaltly);
    // @ts-ignore
    fd.append('date',recipe.date);
    fd.append('ingredients',recipe.ingredients);

    
    return this.http.post<Recipe>(`api/recipe`, fd  )
  }


  update(id:string, recipe:Recipe, image:File):Observable<Recipe>{
    const fd = new FormData();

  fd.append('image',image,image.name);
    // @ts-ignore
    fd.append('category', recipe.category);
    // @ts-ignore
    fd.append('_id', recipe._id);
    // @ts-ignore
    fd.append('date',recipe.date);
    // @ts-ignore
    fd.append('description',recipe.description);
    // @ts-ignore
    fd.append('title',recipe.title);
    // @ts-ignore
    fd.append('dificaltly',recipe.difficaltly);
    fd.append('time',recipe.time);
    fd.append('portions',recipe.portions);

    // @ts-ignore
    fd.append('date',recipe.date);
    fd.append('ingredients',recipe.ingredients);
    return this.http.patch<Recipe>(`api/recipe/${id}`,fd)
  }
  delete(id:string):Observable<Recipe>{
    return this.http.delete<Recipe>(`api/recipe/${id}`)
  }
  getByName(name: String):Observable<Recipe>{
    return this.http.get<Recipe>(`api/recipe/se`)
  }
}
