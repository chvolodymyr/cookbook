import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Recipe} from "../models/Recipe";

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private http: HttpClient) { }

   getByCategoryId(id: string):Observable<Recipe[]>{
    return this.http.get<Recipe[]>(`api/history/${id}`)
  };
}
