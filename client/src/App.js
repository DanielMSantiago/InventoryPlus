import React, { useEffect, useState } from "react";
import "./App.css";
import { InventoryHome } from "./Components/Inventory/InventoryHome";

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);
  return <InventoryHome />;
}

export default App;
