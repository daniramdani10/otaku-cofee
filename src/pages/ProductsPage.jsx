import React from "react";
import Button from "../Element/Button";
import CardProduct from "../Fragment/CardProduct";
import TableCart from "../Fragment/TableCart";

const ProductsPage = () => {
  const username = localStorage.getItem("username");
  const handleLogout = () => {
    window.location.href = "/login";
  };

  const products = [
    {
      id: 1,
      title: "Miruku",
      image: "/images/images-1.jpg",
      price: 40000,
    },
    {
      id: 2,
      title: "Romano",
      image: "/images/images-2.jpg",
      price: 15000,
    },
    {
      id: 3,
      title: "Kopi Susu Gula Aren",
      image: "/images/images-3.jpg",
      price: 12000,
    },
  ];

  return (
    <div>
      <div className="flex justify-end gap-5 px-10 h-16 items-center border">
        <div className="text-slate-800">{username}</div>
        <Button classname="bg-slate-800" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex">
        <div className="flex gap-3 mx-10 my-5 w-4/6">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} alt={product.title} />
              <CardProduct.Body
                title={product.title}
                price={"Rp. " + product.price.toLocaleString("id-ID")}
              />
              <CardProduct.Footer id={product.id} />
            </CardProduct>
          ))}
        </div>
        <div className="w-2/6 p-5">
          <h1 className="font-bold text-2xl">cart</h1>
          <TableCart products={products} />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
