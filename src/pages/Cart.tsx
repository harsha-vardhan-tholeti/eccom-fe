import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "./../components/CartItem/CartItem";
import { Link } from "react-router-dom";

const cartItems = [
  {
    productId: "ada",
    photo: "https://m.media-amazon.com/images/I/71eXNIDUGjL._SL1500_.jpg",
    name: "Mac book",
    price: 3000,
    quantity: 4,
    stock: 10,
  },
];
const subtotal = 4000;
const tax = Math.round(subtotal * 0.18);
const discount = 400;
const shippingCharges = 200;
const total = subtotal + tax + shippingCharges;

const Cart = () => {
  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);

  useEffect(() => {
    const timeOutID = setTimeout(() => {
      if (Math.random() > 0.5) setIsValidCouponCode(true);
      else setIsValidCouponCode(false);
    }, 1000);
    return () => {
      clearTimeout(timeOutID);
    };
  }, [couponCode]);

  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((i, idx) => <CartItem key={idx} cartItem={i} />)
        ) : (
          <h1>No Items Added</h1>
        )}
      </main>
      <aside>
        <p>Subtotal: &#8377;{subtotal}</p>
        <p>Shipping Charges: &#8377;{shippingCharges}</p>
        <p>Tax: &#8377;{tax}</p>
        <p>
          Discount: <em className="red"> - &#8377;{discount} </em>
        </p>
        <p>
          <b>Total: &#8377;{total}</b>
        </p>
        <input
          type="text"
          placeholder="Coupon Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />
        {couponCode &&
          (isValidCouponCode ? (
            <span className="green">
              &#8377;{discount} off using the <code>{couponCode}</code>
            </span>
          ) : (
            <span className="red">
              Invalid Coupon <VscError />
            </span>
          ))}

        {cartItems.length > 0 && <Link to={"/shipping"}>Checkout</Link>}
      </aside>
    </div>
  );
};

export default Cart;
