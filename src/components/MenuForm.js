import { useState } from "react";
import axios from "axios";

export default function MenuForm({ onMenuAdded }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false); // Toggle form visibility

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/menu", { name, description });
      alert("Menu created successfully!");
      setName("");
      setDescription("");
      onMenuAdded();
      setIsFormVisible(false); // Hide form after submission
    } catch (error) {
      alert("Error creating menu");
    }
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible); // Toggle form visibility on click
  };

  return (
    <div className="container mt-4">
      {/* Button to show form */}
      <button
        onClick={toggleFormVisibility}
        className="btn btn-secondary mb-3"
      >
        {isFormVisible ? "Cancel" : "Create a New Menu"}
      </button>

      {/* Form visible only when isFormVisible is true */}
      {isFormVisible && (
        <form onSubmit={handleSubmit} className="p-3 border rounded shadow-sm bg-light">
          <div className="mb-3">
            <label className="form-label">Menu Name:</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description:</label>
            <textarea
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Create Menu</button>
        </form>
      )}
    </div>
  );
}

