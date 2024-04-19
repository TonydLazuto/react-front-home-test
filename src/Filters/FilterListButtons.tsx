
type FilterListButtonsProps = {
    filterList: string[];
    setFilter: (filter: string) => void
};

export const FilterListButtons = ({ filterList, setFilter } :FilterListButtonsProps) => {
    return (
      <div>
        {filterList.map((filter) => (
          <button key={filter} onClick={() => setFilter(filter)}>
            {filter}
          </button>
        ))}
      </div>
    );
};