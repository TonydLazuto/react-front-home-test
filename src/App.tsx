import { useState } from "react";
import "./styles.css";
import { TagList } from "./Tagfilter/ListeDesTags";
import { tagList } from "./Tags/TagData";
import { FilterListButtons } from "./Filters/FilterListButtons";
import { FilteredRecipeList } from "./Filters/FilteredRecipeList";

const App = () => {
  const [filter, setFilter] = useState<string>("all");
  const filterList = ["chocolate", "sugar", "summer", "dessert", "chocolate dessert", "eggs free", "autumn", "vegan"];
  return (
    <div className="App">
      Liste des recettes
      <TagList tags={tagList} />
      <FilterListButtons filterList={filterList} setFilter={setFilter} />
      <FilteredRecipeList filter={filter} />
    </div>
  );
}

export default App;