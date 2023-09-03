
import Recommended from '../Recommended/Recommended'
import Products from "../Products/ProductList"
import products from "../db/data"
import Sidebar from "../SideBar/Sidebar"
import Card from "../components/Card"
import { useState } from "react";
import Nav from "../Nav/Nav"
import Cart from "../Cart"

function Product() {
  const [cart, setCart] = useState([])

  const handleClickk = (item) => {
    console.log(item)
  }




  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
          handleClickk={handleClickk}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);


  return (

    <>
    <Nav />
  
  
    <Sidebar handleChange={handleChange} />
    <Recommended handleClick={handleClick}/>
    <Products result={result} />
    

    </>
  );
}

export default Product;
