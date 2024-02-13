import { Button } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import IconMoney from './icons/IconMoney';

const Cart = ({ cart, removeFromCart, clearCart }) => {

  const generarMensajeWhatsApp = () => {
      const productosEnWhatsApp = cart.map(item => `*${item.name}* - *s/${item.price}*.00 x ${item.quantity}`);
      const cantidadTotal = cart.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2);
      const mensaje = `¡Hola! Quiero realizar un pedido. Mis productos son:\n${productosEnWhatsApp.join('\n')}\n*Cantidad total a pagar*: ${cantidadTotal} soles`;
      return encodeURIComponent(mensaje);
  };

  return (
    <div>
      <p className='text-white'>Cantidad de productos:<span className='ps-1 fw-bold'>{cart.length}</span></p>
      <div className='row row-cols-1 row-cols-lg-1 row-cols-md-1'>
        {cart.map((item) => (
          <div key={item.id} className='col'>
            <ListGroup as="ol" className='px-2'>
              <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start px-1 mb-3">
                <div className="ms-2 me-auto d-flex align-items-center justify-content-between">
                  <img src={item.image} className='w-25 rounded-2' alt={item.name} />
                  <div className='ps-3'>
                    <div className="fw-bold text-small">{item.name}</div>
                    <span className="text-small">precio: s/{item.price}.00</span>
                  </div>
                  <Button onClick={() => removeFromCart(item.id)} className='text-small border-0 bg-danger d-block mt-2'>Eliminar</Button>
                </div>
                <Badge bg="primary" pill>{item.quantity}</Badge>
              </ListGroup.Item>
            </ListGroup>       
          </div>
        ))}
      </div>
      <p className='text-white py-2'>Total a pagar: <span className='fw-bold bg-primary py-1 px-2 rounded-2'>s/{cart.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2)}</span></p>
      <Button onClick={clearCart} className='bg-primary text-white fw-bold text-small border-0 mb-3 me-3'>Vaciar carrito</Button>
      <Button 
          href={`https://wa.me/+51902295945?text=${generarMensajeWhatsApp()}`} 
          className='bg-success fw-bold text-small text-white border-0 mb-3'
          target="_blank" rel="noopener noreferrer"
      >
        <span className='pe-1'>Pedir y Pagar</span><IconMoney/>
      </Button>
    </div>
  );
};

export default Cart;
