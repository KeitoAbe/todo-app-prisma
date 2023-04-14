type Props = {
  filterText: string;
  isStockOnly: boolean;
  onFilterTextChange: (filterText: string) => void;
  onIsStockOnlyChange: (isStockOnly: boolean) => void;
};

function SearchBar({
  filterText,
  isStockOnly,
  onFilterTextChange,
  onIsStockOnlyChange,
}: Props) {
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={filterText}
          onChange={(e) => {
            onFilterTextChange(e.target.value);
          }}
        />
      </div>
      <label>
        <input
          type="checkbox"
          checked={isStockOnly}
          onChange={(e) => onIsStockOnlyChange(e.target.checked)}
        />{" "}
        Only show products in stock
      </label>
    </>
  );
}

export default SearchBar;
