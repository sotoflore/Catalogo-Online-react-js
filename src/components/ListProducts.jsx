import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import ModalProduct from './ModalProduct';
import CardProduct from './CardProduct';

const ListProduct = ({ products, addToCart }) => {

    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleClose = () => {
      setShowModal(false);
      setSelectedProduct(null);
    };

    const handleShow = (product) => {
      setSelectedProduct(product);
      setShowModal(true);
    };

    return (
      <Container>
        <h2 className='text-center text-white fw-bold'>Explora nuestro Catálogo</h2>
        <p className='text-center mb-4 text-white'>¡Descubre la magia que solo la variedad puede ofrecer!</p>
        {products.length > 0 ? (
          <div className='row row-cols-2 row-cols-lg-4 row-cols-md-3 g-4'>
            {products.map(product => (
              <div key={product.id} className='col'>
                  <CardProduct product={product} onShowDetails={handleShow}  addToCart={addToCart} />
              </div>
            ))}
          </div>
        ) : (
          <p className='text-center mt-5 bg-danger text-white rounded-3 py-2'>No se encontraron productos, sigue buscando!! 🤷‍♂️</p>
        )}
        {selectedProduct && (
          <ModalProduct show={showModal} handleClose={handleClose} product={selectedProduct} />
        )}
      </Container>
    );
};
export default ListProduct;
