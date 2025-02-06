import { useEffect, useState } from "react";
import axios from "axios";

export default function MenuList({ onMenuSelect }) {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/menu")
      .then((res) => setMenus(res.data))
      .catch((err) => console.error("Error fetching menus", err));
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {menus.map((menu) => (
          <div key={menu._id} className="col-md-4 col-sm-6 mb-3">
            <div className="card shadow-sm" onClick={() => onMenuSelect(menu)}>
              <div className="card-body">
                <h5 className="card-title">{menu.name}</h5>
                <p className="card-text">{menu.description}</p>
                <button className="btn btn-secondary w-100">View Items</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
