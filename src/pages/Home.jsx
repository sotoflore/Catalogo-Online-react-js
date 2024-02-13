import React, { useState, useEffect } from 'react';
import productsData from '../data/products.json';
import ListProduct from '../components/ListProducts';
import Container from 'react-bootstrap/Container';

import { ToastContainer, toast } from 'react-toastify';
import SliderCarousel from '../components/SliderCarousel';
import Features from '../components/Features';
import MenuFilter from '../components/MenuFilter';
import NavigationBar from '../components/NavigationBar';

const Home = () => {
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
        className:"w-100 rounded-3 notificacion",
      });
    };

    const removeFromCart = (productId) => {
      const updatedCart = cart.filter((item) => item.id !== productId);
      setCart(updatedCart);
      toast.error("producto eliminado!", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        className:"w-100 rounded-3 notificacion",
      });
    };

    const clearCart = () => {
      setCart([]);
      toast.error("Todos los productos fueron eliminados", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        className:"w-100 rounded-3 notificacion",
      });
    };

    return (
      <>
          <NavigationBar handleSearch={handleSearch} cart={cart} removeFromCart={removeFromCart} clearCart={clearCart}/>
          <SliderCarousel/>
          <Features/>
          <main>
            <MenuFilter
                categories={categories}
                onCategoryClick={handleCategoryClick}
                onPriceFilter={handlePriceFilter}
                products={products} 
            />
            <ListProduct products={finalFilteredProducts} addToCart={addToCart} />
            <Container>
              <ToastContainer className="p-5 p-lg-0 p-md-0"/>
            </Container>
          </main>
      </>
    );
};
export default Home;