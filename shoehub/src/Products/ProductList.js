import "./product.css";

const ProductList = ({ result }) => {
  
  return (
    <>
      <section className="card-container">{result}</section>
    </>
  );
};

export default ProductList;