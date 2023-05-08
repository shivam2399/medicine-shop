import React, {useState} from 'react';  
import { useMedicineContext } from "./MedicineContext";

const MedicineInput = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const { addMedicine } = useMedicineContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    addMedicine({ name, description, price, quantity: 1 });
    setName('');
    setDescription('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Medicine name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <input
        type="text"
        placeholder="Price"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      />
      <button type="submit">Add to List</button>
    </form>
  );
};

export default MedicineInput;