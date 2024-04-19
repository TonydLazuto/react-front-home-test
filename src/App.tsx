import { useEffect, useState } from "react";
import "./styles.css";
import { TagList } from "./Tagfilter/ListeDesTags";
import { tagList } from "./Tags/TagData";
import { FilterListButtons } from "./Filters/FilterListButtons";
import Recipes from "./Recipes/Recipes";
import { allRecipes } from "./Recipes/RecipeData";
import { ListOfRecipes, RecipeType } from "./Recipes/RecipeType";

const App = () => {
  const [filter, setFilter] = useState<string>("all");
  const [filterTags, setFilterTags] = useState<string[]>([]);
  // TODO: "chocolate dessert", "eggs free"
  // demande une gestion différente des filtres par ingredients
  const filterList = ["chocolate", "sugar", "summer", "dessert", "chocolate dessert", "eggs free", "autumn", "vegan"];
  const [filtersSelected, setFiltersSelected] = useState<string[]>([]);
  const [recipes, setRecipes] = useState<ListOfRecipes>(allRecipes);

  const getRecipesByTag = (filterSelected: string): RecipeType[] => {
    return allRecipes.filter((recipe) => {
      const tags = recipe.tags.map((tag) => tag.id);
      return tags.includes(filterSelected);
    });
  }

  const getRecipesByIngredient = (filterSelected: string): RecipeType[] => {
    return allRecipes.filter((recipe) => {
      const ingredients = recipe.ingredients.map((ingredient) => ingredient.name);
      return ingredients.includes(filterSelected);
    });
  }

  const getRecipes = (filterSelected: string): RecipeType[] => {
    if (filterSelected === "chocolate dessert" || filterSelected === "eggs free") {
      //TODO: change implementation
      console.log("Not implemented yet")
      return [];
    }
    const recipesByTag = getRecipesByTag(filterSelected);
    console.log(recipesByTag)
    const recipesByIngredient = getRecipesByIngredient(filterSelected);
    console.log(recipesByIngredient)
    const recipes = recipesByTag.length === 0 ? recipesByIngredient : recipesByTag;
    console.log(recipes)
    return recipes;
  }

  useEffect(() => {
    if (filter !== "all") {
      setFiltersSelected([]);
      setFiltersSelected([filter]);
    }
  }, [filter])

  useEffect(() => {
    console.log(filtersSelected);
    if (filtersSelected.length === 0) return ;
    filtersSelected.forEach((filterSelected) => {
      const curRecipes = getRecipes(filterSelected);
      setRecipes(curRecipes);
    });
  },[filtersSelected])

  return (
    <div className="App">
      Liste des recettes
      <div style={{ margin : 'auto', width: "70%" }}>
        <TagList tags={tagList} filter={filter} filterTags={filterTags} setFilterTags={setFilterTags} />
        <FilterListButtons filterList={filterList} setFilter={setFilter} />
      </div>
      <Recipes recipes={recipes} />
    </div>
  );
}

export default App;