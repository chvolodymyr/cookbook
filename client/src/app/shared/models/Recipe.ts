export class Recipe {
  constructor(
    public _id: string = '',
    public imgSource: string = '',
    public category: string = '',
    public date: Date,
    public title: string = '',
    public portions:  string = '',
    public time:  string = '',
    public  ingredients: string = '',
    public difficaltly: string = '',
    public description: string = '',
  ) {
  }
}
