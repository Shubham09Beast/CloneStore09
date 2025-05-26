import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import React, { useState } from "react";

function App() {
  const products = [
    {
      price: 1000,
      name: "Iphone 10S",
      quantity: 0,
    },
    {
      price: 1000,
      name: "Iphone 10S",
      quantity: 0,
    },
    {
      price: 2000,
      name: "Samsung",
      quantity: 0,
    },
    {
      price: 3000,
      name: "Vivo",
      quantity: 0,
    },
  ];

  let [productList, setProductList] = useState(products);

  const incrementQty = (index) => {
    let newProductList = [...productList];
    newProductList[index].quantity++;
    setProductList(newProductList);
  }

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <ProductList productList={productList} incrementQty={incrementQty} />
      </main>

      <Footer />
    </>
  );
}

export default App;
