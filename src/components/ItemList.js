import { useEffect, useState } from "react";
import axios from "axios";

export default function ItemList({ menu }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(`https://dns-task-backend.onrender.com/menu/${menu._id}/items`)
      .then((res) => setItems(res.data))
      .catch((err) => console.error("Error fetching items", err));
  }, [menu]);

  return (
    <div className="container mt-4">
      <h3 className="text-center">{menu.name} - Items</h3>
      <div className="row">
        {items.map((item) => (
          <div key={item._id} className="col-md-4 col-sm-6 mb-3">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <p className="text-success"><strong>${item.price}</strong></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
