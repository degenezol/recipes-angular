export interface Recipe {
  title: string;
  description: string;
  photoUrl: string;
  ingredients: Array<string>;
  instructions: string;
  categoryId: string;
  likes?: number;
  id?: string;
  favorites?: boolean;
}
