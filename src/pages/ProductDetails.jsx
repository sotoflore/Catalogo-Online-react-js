import { NavLink, useParams } from 'react-router-dom';
import products from '../data/products.json';
import Button from 'react-bootstrap/Button';
import IconWhatsapp from '../components/icons/IconWhatsapp';
import BackButton from '../components/BackButton';
import { Zoom } from 'react-swift-reveal';

const ProductDetails = () => {
    const { id } = useParams();
    const product = products.find((p) => parseInt(p.id) === parseInt(id));
  
    if (!product) {
      return <div>Producto no encontrado</div>;
    } 

    return (
      <>
        <BackButton/>
        <Zoom>
          <section className="container section-product-details d-flex flex-column justify-content-center">
          <div className="row justify-content-center px-3 px-md-5 py-4 py-md-5 shadow-sm bg-white border-2 border-secondary-subtle rounded-3 mb-md-5 mb-lg-0">
            <div className="col-12 col-md-12 col-lg-5 text-center text-md-center text-lg-start mb-3 mb-md-4 mb-lg-0">
              <img src={product.image} className='w-75 rounded-3 image-details' alt={product.name} />
            </div>
            <div className="col-12 col-md-12 col-lg-6 rounded-3 px-4 px-lg-5 py-4 bg-header">
              <h1 className='text-white fw-bold'>{product.name}</h1>
              <p className='text-white'>{product.description}</p>
              <p className='text-white fw-bold'>Categoría:<span className='ps-2 fw-light'>{product.category}</span></p>
              <Button className='text-white fw-bold bg-danger border-0'>S/{product.price}.00</Button>
              <div className='mt-5'>
                <Button href={`https://wa.me/+51902295945?text=Hola,%20Deseo%20más%20información%20de%20este%20producto:%20*${product.name}*%20-%20Precio:%20*S/${product.price}.00*`} className='w-100 mt-3 fw-bold bg-success border-0 text-white d-flex align-items-center justify-content-center' target="_blank" rel="noopener noreferrer"><IconWhatsapp/><span className='ps-1'>Comprar ahora</span></Button>
              </div>
            </div>
          </div>
        </section>
        </Zoom>
      </>
    );
};

export default ProductDetails;
