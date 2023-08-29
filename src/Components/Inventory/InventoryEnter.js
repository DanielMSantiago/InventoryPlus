import React, { useState } from "react";
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
  Notes,
  InventoryContainer,
  OrderItemsTable,
  InventoryPageBtn,
  MakeInput,
  ModelInput,
  ReceivedInput,
  ReceivedAutoDate,
} from "./styles.ts";

export const InventoryEnter = () => {
  const [rows, setRows] = useState([
    { make: "", model: "", serial: "", received: false, receiveddate: "" },
  ]);

  const addRow = () => {
    const newRow = { values: [""] };
    setRows([...rows, newRow]);
  };

  const handleValueChange = (rowIndex, field, newValue) => {
    const updatedRows = [...rows];
    updatedRows[rowIndex][field] = newValue;
    setRows(updatedRows);

    if (field === "received" && newValue) {
      updatedRows[rowIndex].receiveddate = new Date().toISOString();
    }
  };
  return (
    <InventoryContainer>
      <InventoryFormContainer>
        <label>PO Number: </label>
        <PONumber placeholder="Enter PO" />
        <label>Distributor: </label>
        <DistributorDropdown />
        <label>Distributor Branch: </label>
        <DistributorBranch />
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
              <TableCell>Received</TableCell>
              <TableCell>Received Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                <TableCell>
                  <MakeInput
                    value={row.pid}
                    onChange={(event) =>
                      handleValueChange(rowIndex, "PID", event.target.value)
                    }
                    label={`Row ${rowIndex + 1}, PID`}
                    fullWidth
                    margin="dense"
                  />
                </TableCell>
                <TableCell>
                  <ModelInput
                    value={row.make}
                    onChange={(event) =>
                      handleValueChange(rowIndex, "make", event.target.value)
                    }
                    label={`Row ${rowIndex + 1}, Makes`}
                    fullWidth
                    margin="dense"
                  />
                </TableCell>
                <TableCell>
                  <ModelInput
                    value={row.model}
                    onChange={(event) =>
                      handleValueChange(rowIndex, "model", event.target.value)
                    }
                    label={`Row ${rowIndex + 1}, Model`}
                    fullWidth
                    margin="dense"
                  />
                </TableCell>
                <TableCell>
                  <ModelInput
                    value={row.serial}
                    onChange={(event) =>
                      handleValueChange(rowIndex, "serial", event.target.value)
                    }
                    label={`Row ${rowIndex + 1}, Serial Number`}
                    fullWidth
                    margin="dense"
                  />
                </TableCell>
                <TableCell>
                  <ReceivedInput
                    value={row.received}
                    onChange={(event) =>
                      handleValueChange(
                        rowIndex,
                        "received",
                        event.target.checked
                      )
                    }
                    label={`Row ${rowIndex + 1}, Received`}
                    fullWidth
                    margin="dense"
                  />
                </TableCell>
                <TableCell>{row.receiveddate}</TableCell>
                {/* Repeat the same pattern for other cells */}
              </TableRow>
            ))}
          </TableBody>
        </OrderItemsTable>
        <InventoryPageBtn onClick={addRow}>Add Row</InventoryPageBtn>
      </TableContainer>
    </InventoryContainer>
  );
};

export default InventoryEnter;
