import React, { useState } from 'react';
import IconCheck from './icons/IconCheck';
import IconCheckGrid from './icons/IconCheckGrid';
import IconFilter from './icons/IconFilter';
import IconMoney from './icons/IconMoney';

const SidebarMenu = ({ categories, onCategoryClick, onPriceFilter }) => {

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
      <aside className='fixed-top p-5 h-100 w-25'>
        <h2 className='text-white fw-bold fs-4 d-flex align-items-center'><IconCheckGrid/><span className='ps-2'>Filtros</span></h2>
        <p className='text-white fw-bold d-flex align-items-center'><IconFilter/> <span className='ps-1'>Categorías</span></p> 
        <div className='text-white list-category'>
          <button onClick={() => handlePriceFilter(null)} className='bg-primary text-white fw-bold rounded-2 border-0 btn-todo'><IconCheck/> Todos</button>
          {categories.map(category => (
            <button key={category} onClick={() => handleCategoryClick(category)} className='d-lg-block bg-transparent border-0 text-white my-2 rounded-3 btn-filter'>
              <IconCheck/> {category}
            </button>
          ))}
        </div>
        <p className='text-white'>Seleccionaste: <span className="badge text-bg-light">{selectedCategory || 'Ninguna'}</span></p>
        <p className='text-white fw-bold d-flex align-items-center'><IconMoney/><span className='ps-1'>Precio</span></p>
        <div className='group-btn'>
          <button className='d-lg-block border-0 bg-transparent text-white btn-price-filter' onClick={() => handlePriceFilter({ min: 0, max: 50 })}><IconCheck/> 0 - 50 soles</button>
          <button className='d-lg-block border-0 bg-transparent text-white btn-price-filter' onClick={() => handlePriceFilter({ min: 50, max: 100 })}><IconCheck/> 50 - 100 soles</button>
          <button className='d-lg-block border-0 bg-transparent text-white btn-price-filter' onClick={() => handlePriceFilter({ min: 100, max: 200 })}><IconCheck/> 100 - 200 soles</button>
        </div>
        <p className='text-white'>Rango de Precio: <span className="badge text-bg-light">{priceFilter ? `${priceFilter.min}-${priceFilter.max} soles` : 'Todos'}</span></p>
      </aside>
    );
};
export default SidebarMenu;

