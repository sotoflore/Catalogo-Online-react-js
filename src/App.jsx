import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import productsData from './data/products.json';
import ListProduct from './components/ListProducts';
import SidebarMenu from './components/SidebarMenu';
import Container from 'react-bootstrap/Container';
import Row  from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';

import { ToastContainer, toast } from 'react-toastify';
import Cart from './components/Cart';
import IconCart from './components/icons/IconCart';

const App = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [priceFilter, setPriceFilter] = useState(null);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
      setProducts(productsData);
      setCategories([...new Set(productsData.map(product => product.category))]);
    }, []);

    const handleSearch = (e) => {
      setSearchTerm(e.target.value);
      setSelectedCategory(null);
      setPriceFilter(null); 
    };

    const handleCategoryClick = (category) => {
      setSearchTerm('');
      setSelectedCategory(category);
      setFilteredProducts(productsData.filter(product => product.category === category));
      setPriceFilter(null);
    };

    const handlePriceFilter = (filter) => {
      setSearchTerm('');
      setSelectedCategory(null); 
      setPriceFilter(filter);
      setFilteredProducts(productsData.filter(product =>
        (!filter || (product.price >= filter.min && product.price <= filter.max))
        && (!selectedCategory || product.category === selectedCategory)
      ));
    };

    const filteredBySearchTerm = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const finalFilteredProducts = (selectedCategory || priceFilter)
      ? filteredProducts
      : filteredBySearchTerm;

    const addToCart = (product) => {
      const existingProductIndex = cart.findIndex((item) => item.id === product.id);

      if (existingProductIndex !== -1) {
        const updatedCart = [...cart];
        updatedCart[existingProductIndex].quantity += 1;
        setCart(updatedCart);
      } else {
        setCart([...cart, { ...product, quantity: 1 }]);
      }

      toast.success(`${product.name} agregado al carrito!`, {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "colored",
        className:"w-100 rounded-3 notificacion",
      });
    };

    const removeFromCart = (productId) => {
      const updatedCart = cart.filter((item) => item.id !== productId);
      setCart(updatedCart);
    };

    const clearCart = () => {
      setCart([]);
    };

    return (
      <main>
        <Container>
          <Row>
            <Col sm={12} xs={12} md={12} lg={3}>
                <SidebarMenu
                  categories={categories}
                  onCategoryClick={handleCategoryClick}
                  onPriceFilter={handlePriceFilter}
                  products={products}
                />
            </Col>
            <Col sm={12} xs={12} md={12} lg={9} className='bg-list-product my-4 rounded-4 px-0'>
              <h1 className='text-uppercase fw-bold text-lg-center title z-3 mb-lg-2 pt-3'>A👁 LOOK</h1>
              <Row className='align-items-center my-4'>
                <Col sm={12} xs={12} md={6} lg={8}>
                  <SearchBar handleSearch={handleSearch} />
                </Col>
                <Col sm={12} xs={12} md={6} lg={4}>
                  <div className="position-relative text-end z-2 me-lg-5 shopping">
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                          <span className='d-none d-lg-inline-block pe-1'>Ver Productos</span><IconCart/>
                          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger fs-6">
                            {cart.length}
                          </span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className='bg-success product-cart rounded-3'>
                          <Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} />
                        </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </Col>
              </Row> 
              <ListProduct products={finalFilteredProducts} addToCart={addToCart} />
            </Col>
          </Row>
          <ToastContainer className="p-5 p-lg-0 p-md-0" />
        </Container>
      </main>
    );
};
export default App;