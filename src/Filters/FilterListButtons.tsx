
type FilterListButtonsProps = {
    filterList: string[];
    setFilter: (filter: string) => void
};

export const FilterListButtons = ({ filterList, setFilter } :FilterListButtonsProps) => {
    return (
      <div style={{
        margin: "10px",
        padding: "5px",
        borderRadius: "3px",
        display: "flex",
        justifyContent: "space-between",
      }}>
        {filterList.map((filter) => (
          <button key={filter} onClick={() => setFilter(filter)}>
            {filter}
          </button>
        ))}
      </div>
    );
};