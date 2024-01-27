import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import IconWhatsapp from './icons/IconWhatsapp';

const CardProduct = ({ product, onShowDetails }) => {
  return (
    <Card className='h-100 shadow p-2 rounded-3 border-0'>
      <Card.Img variant="top" src={product.image} className='img-fluid rounded-2' alt={product.name} />
      <Card.Body>
        <Card.Title className='fs-6 fw-bold'>{product.name}</Card.Title>
        <p className='badge text-bg-primary'><small>{product.category}</small></p>
        <p className='text-black fw-bold text-small'>Precio: <span className='badge text-bg-danger p-2'>S/{product.price}.00</span></p>
        <Button href={`https://wa.me/3127393740?text=Hola,%20Deseo%20más%20información%20de%20este%20producto:%20*${product.name}*%20-%20${product.description}%20-%20Precio:%20*S/${product.price}.00*`} className='w-100 mt-3 bg-success border-0 text-white d-flex align-items-center justify-content-center text-small' target="_blank" rel="noopener noreferrer"><IconWhatsapp/><span className='ps-1'>Comprar</span></Button>
        <Button onClick={() => onShowDetails(product)} className='w-100 mt-2 bg-black border-0 text-small text-white' >Ver Detalles</Button>
      </Card.Body>
    </Card>
  );
};

export default CardProduct;
