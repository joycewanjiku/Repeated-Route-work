import React, { useEffect, useState } from "react";
 import {Link } from "react-router-dom";
import './style.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    (async () => {
      await getProducts();
    })();
  }, []);


const getProducts = async () => {
  try {
    setLoading(true);
    const response = await fetch('https://dummyjson.com/products');
    const result = await response.json();
    setProducts(result.products);
    setLoading(false);
  } 
  catch (error) {
    console.log(error.message);
  }
};
console.log({ products });
if (loading) {
  return <h1>Products loading...</h1>;
}
return (
<div>
<h1 className="heading">All Products</h1>
  <div className="product-display">
    {products.map((item) => (
    <div className="details" key={item.id}>
      <img className="image" src={item.thumbnail} alt="product"></img>
      <h3 className="title">{item.title}</h3>
      <h4 className="price">{item.price}</h4>
      <h6 className="percent">{item.discountPercentage}</h6>
      <Link to={`/information/${item.id}`} key={item.id}><button className="product-link">See Details</button></Link>
    </div>
    ))}
  </div>
  <Link to={`/form`} ><button className="button-add">Add Product</button></Link>      
</div>
)};
export default Products;