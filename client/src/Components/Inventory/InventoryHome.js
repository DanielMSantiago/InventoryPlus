//Import Important React Files
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//File Imports
import InventoryEnter from "./InventoryEnter";
import {
  Header,
  InventoryButtonContainer,
  InventoryContainer,
  InventoryPageBtn,
} from "./styles.ts";

export const InventoryHome = () => {
  return (
    <Router>
      <InventoryContainer>
        <Header>Inventory Plus</Header>
        <InventoryButtonContainer>
          <Link to="/InventoryEnter">
            <InventoryPageBtn variant="contained">Order Entry</InventoryPageBtn>
          </Link>
          <Link>
            <InventoryPageBtn variant="contained">
              View Inventory
            </InventoryPageBtn>
          </Link>
        </InventoryButtonContainer>
      </InventoryContainer>
      <Routes>
        <Route path="/InventoryEnter" element={<InventoryEnter />} />
      </Routes>
    </Router>
  );
};

export default InventoryHome;
