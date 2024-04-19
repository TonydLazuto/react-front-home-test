import { Tags } from "../Tags/Tags";
import { TagType } from "../Tags/TagType";
import { tagList } from "../Tags/TagData";

export const TagList = ({ tags, filter, filterTags, setFilterTags }: {
  tags: TagType[],
  filter: string,
  filterTags: string[],
  setFilterTags: (filter: string[]) => void
}) => {
  const handleClick = (tag: string) => {
    if (filterTags.includes(tag)) {
      setFilterTags(filterTags.filter((t) => t !== tag));
    } else {
      setFilterTags([...filterTags, tag]);
    }
  };
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
          onClick={() => handleClick(tag.name.fr)}
        >
          {tag.name.fr}
        </button>
      ))}
    </div>
  );
};
