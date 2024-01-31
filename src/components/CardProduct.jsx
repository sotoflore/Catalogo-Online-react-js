import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import IconWhatsapp from './icons/IconWhatsapp';

const CardProduct = ({ product, onShowDetails, addToCart }) => {

  return (
    <Card className='h-100 shadow p-1 rounded-3 border-0'>
      <Card.Img variant="top" src={product.image} className='img-fluid rounded-2' alt={product.name} />
      <Card.Body>
        <Card.Title className='fs-6 fw-bold'>{product.name}</Card.Title>
        <p className='badge text-bg-primary'><small>{product.category}</small></p>
        <p className='text-black fw-bold text-small'>Precio: <span className='badge text-bg-danger p-2'>S/{product.price}.00</span></p>
        <Button onClick={() => onShowDetails(product)} className='w-100 mt-3 bg-success border-0 text-white d-flex align-items-center justify-content-center text-small'><IconWhatsapp/><span className='ps-1'>Comprar</span></Button>
        <Button onClick={() => addToCart(product)} className='w-100 mt-2 bg-black border-0 text-small text-white'>Agregar al carrito</Button>
      </Card.Body>
    </Card>
  );
};

export default CardProduct;
