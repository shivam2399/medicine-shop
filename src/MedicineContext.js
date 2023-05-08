import React, { useState } from "react";

export const MedicineContext = React.createContext();

export const MedicineProvider = ({ children }) => {
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
    const total = cart.reduce((acc, medicine) => acc + medicine.price, 0);
    console.log(`Total: ${total}`);
    clearCart();
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
      {children}
    </MedicineContext.Provider>
  );
};

export const useMedicineContext = () => {
  const context = React.useContext(MedicineContext);
  if (!context) {
    throw new Error(
      "useMedicineContext must be used within a MedicineProvider component"
    );
  }
  return context;
};

export default MedicineContext;