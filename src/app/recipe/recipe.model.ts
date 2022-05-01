import { Ingredient } from 'src/common/models/ingredient.model';

export class Recipe {
  constructor(
    public id: number,
    public name: string,
    public desc: string,
    public ingredients: Ingredient[]
  ) {}
}
