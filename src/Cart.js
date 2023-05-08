import { useMedicineContext } from "./MedicineContext";

const Cart = () => {
  const { cart, generateBill, clearCart, closeCart } = useMedicineContext();

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map((medicine) => (
          <li key={medicine.name}>
            {medicine.name} - {medicine.description} - {medicine.price} - {medicine.quantity}
          </li>
        ))}
      </ul>
      <button onClick={generateBill}>Generate Bill</button>
      <button onClick={clearCart}>Clear Cart</button>
      <button onClick={closeCart}>Close Cart</button>
    </div>
  );
};

export default Cart;