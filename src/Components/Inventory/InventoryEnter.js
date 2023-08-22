import React from "react";
import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import {
  CustomerID,
  CustomerName,
  DistributorBranch,
  DistributorDropdown,
  InventoryFormContainer,
  OrderDate,
  PONumber,
  RecievedDate,
  Notes,
  InventoryContainer,
  OrderItemsTable,
  InventoryPageBtn,
} from "./styles.ts";

export const InventoryEnter = (props) => {
  const { products } = props;

  return (
    <InventoryContainer>
      <InventoryFormContainer>
        <label>PO Number: </label>
        <PONumber placeholder="Enter PO" />
        <label>Distributor: </label>
        <DistributorDropdown />
        <label>Distributor Branch: </label>
        <DistributorBranch />
        <label>Recieved Date: </label>
        <RecievedDate />
        <label>Customer ID: </label>
        <CustomerID />
        <label>Customer Name: </label>
        <CustomerName />
        <label typeof="date">Order Date: </label>
        <OrderDate />
        <label>Notes: </label>
        <Notes />
      </InventoryFormContainer>
      <TableContainer>
        <OrderItemsTable>
          <TableHead>
            <TableRow>
              <TableCell>PID</TableCell>
              <TableCell>Make</TableCell>
              <TableCell>Model</TableCell>
              <TableCell>Serial</TableCell>
              <TableCell>Recieved</TableCell>
              <TableCell>Recieved Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableCell></TableCell>
          </TableBody>
        </OrderItemsTable>
        <InventoryPageBtn variant="contained">Add Item</InventoryPageBtn>
      </TableContainer>
    </InventoryContainer>
  );
};

export default InventoryEnter;
