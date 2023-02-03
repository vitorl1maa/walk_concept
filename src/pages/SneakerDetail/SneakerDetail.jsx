import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";

const SneakerDetail = (
    id, 
    title, 
    subtitle, 
    price, image, 
    promotion, 
    sizes
  ) => {
    const value = useContext(DataContext);
    const addCart = value.addCart;
  return (
    <div className="mt-5">
      <h1>Sneaker Detail</h1>
      <button onClick={() => addCart(id)}>Comprar</button>
      {
        sizes?.map(({size, id}) => (
        <ul key={id}>
          <li key={size}>{size}</li>
        </ul>
        )) 
      }
    </div>
  );
};

export default SneakerDetail