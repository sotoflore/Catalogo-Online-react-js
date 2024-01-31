import { Button } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import IconWhatsapp from './icons/IconWhatsapp';
import IconMoney from './icons/IconMoney';

const Cart = ({ cart, removeFromCart, clearCart }) => {
  return (
    <div>
      <h2 className='fs-5 fw-bold text-white text-center pt-2'>Tus Productos</h2>
      <p className='text-small ps-3 text-white'>Cantidad de productos:<span className='ps-1 fw-bold'>{cart.length}</span></p>
      <div className='row row-cols-1 row-cols-lg-1 row-cols-md-1'>
        {cart.map((item) => (
          <div key={item.id} className='col'>
            <ListGroup as="ol" className='px-2'>
              <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start px-1 mb-3">
                <div className="ms-2 me-auto">
                  <div className="fw-bold text-small">{item.name}</div>
                  <span className="text-small">precio: s/{item.price}.00</span>
                  <Button onClick={() => removeFromCart(item.id)} className='text-small border-0 bg-danger d-block'>Eliminar</Button>
                </div>
                <Badge bg="primary" pill>{item.quantity}</Badge>
              </ListGroup.Item>
            </ListGroup>       
          </div>
        ))}
      </div>
      <p className='ps-3 text-white'>total a pagar: <Badge className='fw-bold bg-dark'>${cart.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2)}</Badge></p>
      <Button onClick={clearCart} className='bg-dark text-small border-0 mx-3 mb-3'>Vaciar carrito</Button>
      <Button href="https://wa.me/+51902295945?" className='text-small bg-white text-black border-0 mb-3' target="_blank" rel="noopener noreferrer"><span className='pe-1'>Pedir y Pagar</span><IconMoney/></Button>
    </div>
  );
};

export default Cart;
