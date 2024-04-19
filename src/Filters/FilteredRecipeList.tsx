import { allRecipes } from "../Recipes/RecipeData";
import { ListOfRecipes } from "../Recipes/RecipeType";
import Recipes from "../Recipes/Recipes";
import { autumnRecipes, chocolateDessertRecipes, chocolateRecipes, dessertRecipes, noEggsRecipes, sugarRecipes, summerRecipes, veganRecipes } from "./FilteredRecipeData";

type FilteredRecipeListProps = {
    filter: string;
};

export const FilteredRecipeList = ({ filter }: FilteredRecipeListProps) => {

    return (
      <div>
        {filter === "all" && <Recipes recipes={allRecipes} />}
        {filter === "sugar" && <Recipes recipes={sugarRecipes} />}
        {filter === "summer" && <Recipes recipes={summerRecipes} />}
        {filter === "dessert" && <Recipes recipes={dessertRecipes} />}
        {filter === "chocolate dessert" && (
          <Recipes recipes={chocolateDessertRecipes} />
        )}
        {filter === "eggs free" && <Recipes recipes={noEggsRecipes} />}
        {filter === "chocolate" && <Recipes recipes={chocolateRecipes} />}
        {filter === "autumn" && <Recipes recipes={autumnRecipes} />}
        {filter === "vegan" && <Recipes recipes={veganRecipes} />}
      </div>
    );
}