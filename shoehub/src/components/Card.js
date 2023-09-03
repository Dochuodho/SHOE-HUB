import { BsFillBagFill } from "react-icons/bs";
import { useCart } from "react-use-cart";

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  const { addItem } = useCart();

  return (
    
    <>
      <section className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            <div className="bag">
              <button class="btn btn-success" onClick={()=>addItem({img, title, star, reviews, prevPrice, newPrice})}>Add to cart<BsFillBagFill className="bag-icon" /></button>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;