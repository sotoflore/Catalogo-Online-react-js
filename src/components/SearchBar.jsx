const SearchBar = ({ handleSearch }) => {

  return (
    <div className="w-100 text-center bar-position-sticky bg-list-product z-2">
      <input className="w-75 ps-3 py-1 rounded-start-2 border-1 text-primary fw-bold bar-input" type="text" placeholder="Buscar productos" onChange={handleSearch} />
      <button className="rounded-end-2 py-1 bg-danger border-2">🔍</button>
    </div>
  );
};

export default SearchBar;
