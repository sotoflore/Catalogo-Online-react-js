import { useEffect, useState } from 'react';
import CardProduct from './CardProduct';

const ListProduct = ({ products, addToCart }) => {

    const [sortedProducts, setSortedProducts] = useState([]);

    useEffect(() => {
        const sorted = [...products].sort((a, b) => new Date(b.fecha_creacion) - new Date(a.fecha_creacion));
        setSortedProducts(sorted);
    }, [products]);

    return (
      <section className='container'>
        {sortedProducts.length > 0 ? (
          <div className='row row-cols-2 row-cols-lg-4 row-cols-md-3'>
            {sortedProducts.map(product => (
              <div key={product.id} className='col mb-5'>
                  <CardProduct product={product}  addToCart={addToCart} />
              </div>
            ))}
          </div>
        ) : (
          <p className='text-center mt-5 bg-danger text-white rounded-3 py-2'>No se encontraron productos, sigue buscando!! 🤷‍♂️</p>
        )}
      </section>
    );
};
export default ListProduct;
