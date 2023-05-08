import { useMedicineContext } from "./MedicineContext";

const MedicineList = () => {
  const { medicines, addToCart } = useMedicineContext();

  return (
    <ul>
      {medicines.map((medicine) => (
        <li key={medicine.name}>
          {medicine.name} - {medicine.description} - {medicine.price} - {medicine.quantity}
          <button onClick={() => addToCart(medicine)}>Add to Cart</button>
        </li>
      ))}
    </ul>
  );
};

export default MedicineList;