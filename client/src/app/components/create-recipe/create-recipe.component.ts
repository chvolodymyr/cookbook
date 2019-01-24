import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, NgForm} from "@angular/forms";
import {RecipeService} from "../../shared/services/recipe.service";
import {Recipe} from "../../shared/models/Recipe";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {switchMap} from "rxjs/operators";
import {of} from "rxjs";

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.sass'],

})
export class CreateRecipeComponent implements OnInit {
  @ViewChild('input') inputRef: ElementRef;
  recipeForm: FormGroup;
  categories: Array<any>;
  recipe: Recipe;
  difficaltly: Array<any>;
  image: File;
  id: string;
  imagePreview = '';
  isNew: boolean = true;

  constructor(
    private recipeServices: RecipeService,
    private route: ActivatedRoute ,
    private router: Router) {
  }

  ngOnInit() {
   this.recipeForm = new FormGroup({
     title : new FormControl(),
     imgSource: new FormControl(),
     category: new FormControl(),
     description: new FormControl(),
     time: new FormControl(),
     ingredients: new FormControl(),
     difficaltly: new FormControl(),
     portions: new FormControl()
   });

    this.route.params.pipe(switchMap((params : Params) =>{
      if(params['id']){
        this.isNew = false;
        return  this.recipeServices.getById(params['id']);
      }
      return of(null);
      })
    ).subscribe((res)=>{
      if (res){
        this.id = res._id;
        this.recipe = res;
        this.recipeForm.patchValue({
                title: this.recipe.title,
                description: this.recipe.description,
                time: this.recipe.time,
                portions: this.recipe.portions,
                ingredients: this.recipe.ingredients,
                imgSource: this.recipe.imgSource ? this.recipe.imgSource : '',
                difficaltly: this.recipe.difficaltly,
                category: this.recipe.category
              })
      }
    });

    this.categories = [
      {name: 'Перші страви'},
      {name: 'Другі страви'},
      {name: 'Напої'},
      {name: 'Десерти'},
      {name: 'Запіканки'}
    ];
    this.difficaltly = [
      {name: "Легко"},
      {name: "Середня"},
      {name: "Важка"}
    ];
  }


  triggerClick() {
    this.inputRef.nativeElement.click()
  }

  onFileUpload(event: any) {
    const file = event.target.files[0];
    this.image = file;
    const reader = new FileReader();
    reader.onload = () => {
      // @ts-ignore
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(file)
  }


  createRecipe(recipeForm: NgForm) {
    let $obs;
    if (this.isNew){
      $obs = this.recipeServices.create(recipeForm.value, this.image)
    } else {
     $obs = this.recipeServices.update(this.id, recipeForm.value , this.image)
    }
      $obs.subscribe(res =>{ this.recipe = res;
          this.recipeForm.enable();
          this.router.navigate([''], {});
      })
      }
  }



