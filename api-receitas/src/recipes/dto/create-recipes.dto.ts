export type CreateRecipesDto = {
  name: string;
  ingredients: string;
  preparation: string;
  portions: number;
  userId?: number;
}
