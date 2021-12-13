import { useContext } from "react";
import "../css/CartItem.css";
import CartContext from "../context/cart/CartContext";
import formatCurrency from "format-currency";

const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);
  let opts = { format: "%s%v", symbol: "Rs " };
  
  return (
    <li className='CartItem__item'>
      <img src={item.image} alt='hfhf' />
      <div>
        {item.names} {formatCurrency(`${item.price}`, opts)}
      </div>
      <button className='CartItem__button' style={{color: 'rgb(64,0,0)'}} onClick={() => removeItem(item._id)}>
        Remove
      </button>
    </li>
  );
};

export default CartItem;