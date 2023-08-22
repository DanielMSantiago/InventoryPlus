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
  RecievedDate,
  Notes,
  InventoryContainer,
  OrderItemsTable,
  InventoryPageBtn,
  MakeInput,
  ModelInput,
} from "./styles.ts";

export const InventoryEnter = () => {
  const [rows, setRows] = useState([{ values: [""] }]);

  const addRow = () => {
    const newRow = { values: [""] };
    setRows([...rows, newRow]);
  };

  const handleValueChange = (rowIndex, columnIndex, newValue) => {
    const updatedRows = [...rows];
    updatedRows[rowIndex].values[columnIndex] = newValue;
    setRows(updatedRows);
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
            {rows.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {row.values.map((value, columnIndex) => (
                  <TableCell key={columnIndex}>
                    <MakeInput
                      value={value}
                      onChange={(event) =>
                        handleValueChange(
                          rowIndex,
                          columnIndex,
                          event.target.value
                        )
                      }
                      label={`Row ${rowIndex + 1}, Column ${columnIndex + 1}`}
                      fullWidth
                      margin="dense"
                    />
                  </TableCell>
                ))}
                {row.values.map((value, columnIndex) => (
                  <TableCell key={columnIndex}>
                    <ModelInput
                      value={value}
                      onChange={(event) =>
                        handleValueChange(
                          rowIndex,
                          columnIndex,
                          event.target.value
                        )
                      }
                      label={`Row ${rowIndex + 1}, Column ${columnIndex + 1}`}
                      fullWidth
                      margin="dense"
                    />
                  </TableCell>
                ))}
                {row.values.map((value, columnIndex) => (
                  <TableCell key={columnIndex}>
                    <ModelInput
                      value={value}
                      onChange={(event) =>
                        handleValueChange(
                          rowIndex,
                          columnIndex,
                          event.target.value
                        )
                      }
                      label={`Row ${rowIndex + 1}, Column ${columnIndex + 1}`}
                      fullWidth
                      margin="dense"
                    />
                  </TableCell>
                ))}
                {row.values.map((value, columnIndex) => (
                  <TableCell key={columnIndex}>
                    <ModelInput
                      value={value}
                      onChange={(event) =>
                        handleValueChange(
                          rowIndex,
                          columnIndex,
                          event.target.value
                        )
                      }
                      label={`Row ${rowIndex + 1}, Column ${columnIndex + 1}`}
                      fullWidth
                      margin="dense"
                    />
                  </TableCell>
                ))}
                {row.values.map((value, columnIndex) => (
                  <TableCell key={columnIndex}>
                    <ModelInput
                      value={value}
                      onChange={(event) =>
                        handleValueChange(
                          rowIndex,
                          columnIndex,
                          event.target.value
                        )
                      }
                      label={`Row ${rowIndex + 1}, Column ${columnIndex + 1}`}
                      fullWidth
                      margin="dense"
                    />
                  </TableCell>
                ))}
                {row.values.map((value, columnIndex) => (
                  <TableCell key={columnIndex}>
                    <ModelInput
                      value={value}
                      onChange={(event) =>
                        handleValueChange(
                          rowIndex,
                          columnIndex,
                          event.target.value
                        )
                      }
                      label={`Row ${rowIndex + 1}, Column ${columnIndex + 1}`}
                      fullWidth
                      margin="dense"
                    />
                  </TableCell>
                ))}
              </TableRow>
            ))}
            <InventoryPageBtn
              variant="contained"
              color="primary"
              onClick={addRow}
            >
              Add Row
            </InventoryPageBtn>
          </TableBody>
        </OrderItemsTable>
      </TableContainer>
    </InventoryContainer>
  );
};

export default InventoryEnter;
