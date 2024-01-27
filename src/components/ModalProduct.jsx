import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import IconWhatsapp from './icons/IconWhatsapp';

const ProductModal = ({ show, handleClose, product }) => {
    return (
        <Modal show={show} onHide={handleClose} centered scrollable>
            <Modal.Header closeButton>
                <Modal.Title className='fw-bold'>{product.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body className='px-5'>
                <img src={product.image} className='img-fluid' alt={product.name} />
                <p className='mt-3 fw-bold'>Categoría:<small className='badge text-bg-primary p-2 ms-2'>{product.category}</small></p>
                <p><span className='d-block fw-bold'>Descripción:</span> {product.description}</p>
                <p>{product.color}</p>
                <p className='fw-bold'>Precio: <span className='badge text-bg-danger fs-6 fw-bold rounded-3'>S/{product.price}.00</span></p> 
                <Button href={`https://wa.me/3127393740?text=Hola,%20Deseo%20más%20información%20de%20este%20producto:%20*${product.name}*%20-%20${product.description}%20-%20Precio:%20*S/${product.price}.00*`} className='w-100 mt-3 fw-bold bg-success border-0 text-white d-flex align-items-center justify-content-center' target="_blank" rel="noopener noreferrer"><IconWhatsapp/><span className='ps-1'>Comprar</span></Button>            
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>Cerrar X</Button>
            </Modal.Footer>
        </Modal>
    );
};
export default ProductModal;
