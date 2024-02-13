import { Button } from "react-bootstrap";
import IconCart from "./icons/IconCart";

const AddToCartButton = ({ addToCart, product }) => (
  <Button onClick={() => addToCart(product)} className=''>
    <IconCart />
  </Button>
);
export default AddToCartButton;