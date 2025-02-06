import './App.css';
import React, { useState } from 'react';
import MenuList from './components/MenuList';
import MenuForm from './components/MenuForm';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  const [selectedMenu, setSelectedMenu] = useState(null);
  return (
    <>
        <Navbar />
        <Home />
        <MenuList onMenuSelect={setSelectedMenu} />
        {selectedMenu && (
          <div className="mt-4">
            <ItemList menu={selectedMenu} />
            <ItemForm menuId={selectedMenu._id} onItemAdded={() => setSelectedMenu(selectedMenu)} />
          </div>
        )}
        <MenuForm onMenuAdded={() => setSelectedMenu(null)} />
        <Contact />
    </>
  );
}

export default App;