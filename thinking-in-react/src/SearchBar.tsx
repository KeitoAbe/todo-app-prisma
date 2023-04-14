type Props = {
  filterText: string;
  isStockOnly: boolean;
};

function SearchBar({ filterText, isStockOnly }: Props) {
  return (
    <>
      <div>
        <input type="text" placeholder="Search..." value={filterText} />
      </div>
      <label>
        <input type="checkbox" checked={isStockOnly} /> Only show products in
        stock
      </label>
    </>
  );
}

export default SearchBar;
