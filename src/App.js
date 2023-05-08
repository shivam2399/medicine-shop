import React, { useState, useContext } from "react";
import MedicineList from './MedicineList';
import MedicineInput from './MedicineInput';
import Cart from './Cart';
import MedicineContext from './MedicineContext';


const App = () => {
  const [medicines, setMedicines] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addMedicine = (medicine) => {
    setMedicines([...medicines, medicine]);
  };

  const addToCart = (medicine) => {
    setCart([...cart, medicine]);
  };

  const generateBill = () => {
    const totalPrice = cart.reduce((acc, medicine) => acc + medicine.price * medicine.quantity, 0);
    console.log(`Total Price: ${totalPrice}`);
    setCart([]);
  };

  const clearCart = () => {
    setCart([]);
  };

  const openCart = () => {
    setCartOpen(true);
  };

  const closeCart = () => {
    setCartOpen(false);
  };

  return (
    <MedicineContext.Provider
      value={{
        medicines,
                cart,
    addMedicine,
    addToCart,
    generateBill,
    clearCart,
    openCart,
    closeCart,
  }}
>
  <div>
    <h1>Medicine Shop</h1>
    <button onClick={openCart}>Cart ({cart.length})</button>
    <MedicineInput />
    <MedicineList />
    {cartOpen && <Cart />}
  </div>
</MedicineContext.Provider>
);
};

export default App;