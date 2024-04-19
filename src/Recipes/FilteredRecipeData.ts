import { TagType } from "../Tags/TagType";
import { allRecipes } from "./RecipeData";
import { RecipeType } from "./RecipeType";
import { tagList } from "../Tags/TagData";

export const summerRecipes: RecipeType[] = allRecipes.filter((recipe) => {
  const summer = tagList.find((tag) => tag.id === "summer") as TagType;
  return recipe.tags.includes(summer);
});

export const dessertRecipes: RecipeType[] = allRecipes.filter((recette) => {
  const tags: string[] = recette.tags.map((tag) => tag.id);
  return tags.includes("dessert");
});

export const chocolateDessertRecipes: RecipeType[] = allRecipes.filter((recette) => {
  const tagsString: string[] = recette.tags.map((tag) => tag.id);
  const ingredientString: string[] = recette.ingredients
    ? recette.ingredients.map((ingredient) => ingredient.name)
    : [];
  return (
    tagsString.includes("dessert") && ingredientString.includes("chocolat")
  );
});

export const autumnRecipes: RecipeType[] = allRecipes.filter((recette) => {
  const tagIds = recette.tags.map((tag) => tag.id);
  return tagIds.includes("autumn");
});

export const veganRecipes: RecipeType[] = allRecipes.filter((recette) => {
  const tagIds: string[] = recette.tags.map((tag) => tag.id);
  return tagIds.includes("vegan");
});

export const sugarRecipes: RecipeType[] = allRecipes.filter((recette) => {
  const ingredientsList: string[] | undefined = recette.ingredients?.map(
    (ingredient) => ingredient.name
  );
  return ingredientsList && ingredientsList.includes("sucre");
});

export const chocolateRecipes: RecipeType[] = allRecipes.filter((recette) => {
  const ingredientsList: string[] | undefined = recette.ingredients?.map(
    (ingredient) => ingredient.name
  );

  return ingredientsList && ingredientsList.includes("chocolat");
});

export const noEggsRecipes: RecipeType[] = allRecipes.filter((recette) => {
  const ingredientsString: string[] = recette.ingredients
    ? recette.ingredients.map((ingredient) => ingredient.name)
    : [];
  return !ingredientsString.includes("oeuf");
});