import { Tags } from "../Tags/Tags";
import { TagType } from "../Tags/TagType";
import { tagList } from "../Tags/TagData";

type FilterListButtonsProps = {
  filterList: string[];
  setFilter: (filter: string) => void
  setFilterTags: (filter: string[]) => void
};

export const TagList = ({ tags, setFilterTags }: { tags: TagType[], setFilterTags: (filter: string[]) => void }) => {
  return (
    <div
      style={{
        margin: "10px",
        padding: "5px",
        borderRadius: "3px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {tags.map((tag) => (
        <button
          key={tag.id}
          style={{
            margin: "10px",
            padding: "5px",
            borderRadius: "3px",
            display: "flex",
            justifyContent: "center",
            backgroundColor: `${tag.color}`,
          }}
        >
          {tag.name.fr}
        </button>
      ))}
    </div>
  );
};
