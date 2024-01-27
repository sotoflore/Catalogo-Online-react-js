import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import productsData from './data/products.json';
import ListProduct from './components/ListProducts';
import SidebarMenu from './components/SidebarMenu';
import Container from 'react-bootstrap/Container';
import Row  from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const App = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [priceFilter, setPriceFilter] = useState(null);
    const [filteredProducts, setFilteredProducts] = useState([]);

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
            <Col sm={12} xs={12} md={12} lg={9} className='py-4 bg-list-product my-4 rounded-4 px-0'>            
              <SearchBar handleSearch={handleSearch} />
              <ListProduct products={finalFilteredProducts} />
            </Col>
          </Row>
        </Container>
      </main>
    );
};
export default App;