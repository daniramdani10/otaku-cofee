import React from "react";
import Button from "../Element/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className=" flex flex-col w-full max-w-60 rounded shadow border p-2 gap-2 ">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image, alt } = props;
  return <img src={image} alt={alt} className="items-center rounded-t-md" />;
};
const Body = (props) => {
  const { title, price } = props;
  return (
    <div className="flex justify-between w-full items-center">
      <div>{title} </div>
      <div>{price}</div>
    </div>
  );
};
const Footer = (props) => {
  const { id } = props;
  const dispatch = useDispatch();
  return (
    <Button
      classname="bg-slate-800"
      onClick={() => dispatch(addToCart({ id, qty: 1 }))}
    >
      Add to Cart
    </Button>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
export default CardProduct;
