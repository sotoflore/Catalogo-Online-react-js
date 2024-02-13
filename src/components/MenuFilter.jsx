import React, { useState } from 'react';
import IconCheckGrid from './icons/IconCheckGrid';

const MenuFilter = ({ categories, onCategoryClick, onPriceFilter }) => {

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [priceFilter, setPriceFilter] = useState(null);

    const handleCategoryClick = (category) => {
      setSelectedCategory(category);
      onCategoryClick(category);
    };

    const handlePriceFilter = (filter) => {
      setPriceFilter(filter);
      onPriceFilter(filter);
    };

    return (
    <div className='container my-5'>
        <h1 className='text-center text-shadow fw-bold text-uppercase'>explora nuestros productos</h1>
        <p className='text-center pb-2 fs-5 text-primary fw-bold'>¡Descubre la magia que solo la variedad puede ofrecer!</p>
        <div className='row align-items-center justify-content-center mt-4'>
            <div className="col-12 col-lg-6">
                <div className='text-center'>
                    <button type="button" className="border-0 bg-success text-white text-shadow p-2 rounded-3 fw-bold shadow-button" onClick={() => handlePriceFilter(null)}>Todos</button>
                    {categories.map(category => (
                        <button 
                            type="button" 
                            className="border-0 text-shadow bg-success text-white p-2 ms-2 rounded-3 fw-bold shadow-button mb-3 mb-xxl-0" 
                            key={category} 
                            onClick={() => handleCategoryClick(category)}
                        >{category}</button>
                    ))}
                </div>
                <p className='pt-4 fw-bold text-center  text-lg-start'>Seleccionaste:<span className="badge text-bg-primary ms-1">{selectedCategory || 'Ninguna'}</span></p>
            </div>
            {/* <div className="col-lg-6 text-end">
                <div className='btn-group' role="group" aria-label="Basic outlined">
                    <button type="button" className="btn btn-outline-primary" onClick={() => handlePriceFilter({ min: 0, max: 50 })}>0 - 50 soles</button>
                    <button type="button" className="btn btn-outline-primary" onClick={() => handlePriceFilter({ min: 50, max: 100 })}>50 - 100 soles</button>
                    <button type="button" className="btn btn-outline-primary" onClick={() => handlePriceFilter({ min: 100, max: 200 })}>100 - 200 soles</button>
                </div>
                <p className='pt-2'>Rango de Precio: <span className="badge text-bg-primary">{priceFilter ? `${priceFilter.min}-${priceFilter.max} soles` : 'Todos'}</span></p>
            </div> */}
        </div>
    </div>
    );
};
export default MenuFilter;