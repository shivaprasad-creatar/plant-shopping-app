import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plantsData = [
  { id: 1, name: "Snake Plant", price: 200, category: "Indoor", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Money Plant", price: 150, category: "Indoor", image: "https://via.placeholder.com/150" },

  { id: 3, name: "Rose", price: 250, category: "Outdoor", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Jasmine", price: 180, category: "Outdoor", image: "https://via.placeholder.com/150" },

  { id: 5, name: "Aloe Vera", price: 120, category: "Succulent", image: "https://via.placeholder.com/150" },
  { id: 6, name: "Cactus", price: 100, category: "Succulent", image: "https://via.placeholder.com/150" },
];

function ProductList() {
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState([]);

  const handleAddToCart = (plant) => {
    dispatch(addItem({ ...plant, quantity: 1 }));
    setAddedItems([...addedItems, plant.id]);
  };

  const categories = ["Indoor", "Outdoor", "Succulent"];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Our Plants</h2>

      {categories.map((category) => (
        <div key={category}>
          <h3>{category}</h3>

          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {plantsData
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div
                  key={plant.id}
                  style={{
                    border: "1px solid #ccc",
                    padding: "10px",
                    width: "150px",
                  }}
                >
                  <img src={plant.image} alt={plant.name} width="100%" />
                  <h4>{plant.name}</h4>
                  <p>₹{plant.price}</p>

                  <button
                    onClick={() => handleAddToCart(plant)}
                    disabled={addedItems.includes(plant.id)}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
                  
