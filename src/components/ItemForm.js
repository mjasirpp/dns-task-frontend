import { useState } from "react";
import axios from "axios";

export default function ItemForm({ menuId, onItemAdded }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false); // State for toggling form visibility

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`https://dns-task-backend.onrender.com/menu/${menuId}/items`, { name, description, price });
      alert("Item added successfully!");
      setName("");
      setDescription("");
      setPrice("");
      onItemAdded();
      setIsFormVisible(false); // Hide form after submission
    } catch (error) {
      alert("Error adding item");
    }
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible); // Toggle visibility
  };

  return (
    <div className="container mt-4">
      {/* Button to show/hide form */}
      <button
        onClick={toggleFormVisibility}
        className="btn btn-secondary mb-3"
      >
        {isFormVisible ? "Cancel" : "Add Menu Item"}
      </button>

      {/* Form is shown when isFormVisible is true */}
      {isFormVisible && (
        <form onSubmit={handleSubmit} className="p-3 border rounded shadow-sm bg-light">
          <h4 className="text-center">Add Menu Item</h4>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Item Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <textarea
            className="form-control mb-2"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
          <input
            type="number"
            className="form-control mb-2"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-success w-100">Add Item</button>
        </form>
      )}
    </div>
  );
}
