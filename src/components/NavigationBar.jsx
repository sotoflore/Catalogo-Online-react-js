import { useState } from "react";
import { NavLink } from "react-router-dom";
import Cart from "./Cart";
import IconCart from "./icons/IconCart";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const NavigationBar = ({ handleSearch, cart, removeFromCart, clearCart }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
    <>
        <header className="bg-header py-4 fixed-top top-0">
            <div className="container">
                <div className="row align-items-center text-center">
                    <div className="col-6 col-lg-3 order-0 text-start text-lg-center">
                        <NavLink to="/" className='fs-1 text-uppercase fw-bold text-decoration-none text-start'>
                            <span className='text-title'>A</span>
                            <span className='text-white'>👁️</span>
                            <span className='text-title'>LOOK</span>
                        </NavLink>
                    </div>
                    <div className="col-12 col-lg-7 order-3 order-lg-2 mt-3 mt-md-4 mt-lg-0">
                        <input className="w-75 ps-3 py-2 rounded-start-2 border-1 text-primary fw-bold search" type="text" placeholder="Buscar productos" onChange={handleSearch}/>
                        <button className="rounded-end-2 py-2 bg-danger border-2 d-none d-lg-inline-block">🔍</button>
                    </div>
                    <div className="col-6 col-lg-2 order-2 text-end text-lg-center">
                        <div className="position-relative fs-4 text-white">
                            <Button onClick={handleShow} className="bg-white text-black border-0">
                                <span className='fs-5'><IconCart/></span>
                                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger fs-6">
                                    {cart.length}
                                </span>
                            </Button>
                            <Modal show={show} onHide={handleClose} scrollable>
                                <Modal.Header closeButton className="bg-header border-0">
                                    <Modal.Title className="text-white">Tus Productos</Modal.Title>
                                </Modal.Header>
                                <Modal.Body className="bg-header modal-scrollbar">
                                    <Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart}/>
                                </Modal.Body>
                                <Modal.Footer className="bg-header">
                                    <Button className="bg-danger border-0" onClick={handleClose}>Cerrar</Button>                       
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>
    );
};
export default NavigationBar;