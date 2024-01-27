const SearchBar = ({ handleSearch }) => {
  return (
    <div className="w-100 text-center mb-4 bar-position-sticky bg-list-product">
      <h1 className='text-uppercase fw-bold'>tienda online</h1>
      <input className="w-75 ps-3 py-2 rounded-start-2 border-1 text-primary fw-bold" type="text" placeholder="Buscar productos" onChange={handleSearch} />
      <button className="rounded-end-2 py-2 bg-danger border-2">🔍</button>
    </div>
  );
};

export default SearchBar;
