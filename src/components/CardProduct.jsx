import {  Zoom } from 'react-swift-reveal';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import IconWhatsapp from './icons/IconWhatsapp';
import IconCart from './icons/IconCart';
import { NavLink } from 'react-router-dom';

const CardProduct = ({ product, addToCart }) => {

  return (
    <Zoom>
      <Card className='h-100 shadow rounded-4 border-0 p-3'>
        <Card.Img variant="top" src={product.image} className='img-fluid rounded-3 shadow' alt={product.name} />
        <Card.Body className='p-0 '>
          <Card.Title className='fs-6 fw-bold m-0 mt-3 text-small pb-1 pb-md-0'>{product.name}</Card.Title>
          <p className='badge text-bg-light shadow-sm'><small>{product.category}</small></p>
          <div className='d-flex align-items-center justify-content-between'>
            <Button className='py-1 fw-bold rounded-2 bg-danger border-0 text-small'>S/{product.price}.00</Button>
            <Button onClick={() => addToCart(product)} className='bg-primary text-small'><IconCart/></Button>
          </div>
          <NavLink to={`/producto/${product.id}`} className='w-100 text-small fw-bold mt-3 bg-success border-0 text-white d-flex align-items-center justify-content-center py-1 rounded-3 text-decoration-none'><IconWhatsapp/><span className='ps-1'>Comprar</span></NavLink>
        </Card.Body>
      </Card>
    </Zoom>
  );
};

export default CardProduct;
