import styled from "styled-components";
import Button from "@mui/material/Button";
import { TextField, Table} from "@mui/material";

export const InventoryContainer = styled.div`
    
`;

export const InventoryFormContainer = styled.form`
    display: flex;
    
    margin-left: 1%;


`;

export const InventoryButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1%;
`;

export const Header = styled.h1`
    position: inline-flex;
    text-align: center;
    justify-content: center;
`;

export const InventoryButton = styled.button`
    position: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 1%;
    `;

export const PONumber = styled(TextField)`
    width: 8%;
    top: 17%;
    `;

export const RecievedDate = styled(TextField)`
    width: 8%;
    top: 17%;
`;

export const DistributorDropdown = styled(TextField)`
    width: 8%;
    top: 17%;
`;

export const DistributorBranch = styled(TextField)`
    width: 8%;
    top: 17%;
`;

export const OrderDate = styled(TextField)`
    width: 8%;
    top: 17%;
`;

export const CallDate = styled(TextField)`
    width: 8%;
    top: 17%;
`;

export const Notes = styled(TextField)`
    width: 19%;
    top: 25%;
`;

export const CustomerName = styled(TextField)`
    width: 8%;
    top: 17%;
`;

export const CustomerID = styled(TextField)`
    width: 8%;
    top: 17%;
`;

export const ExpectedPickupDate = styled(TextField)`
    width: 8%;
    top: 17%;
`;

export const InventoryPageBtn = styled(Button)`
`;  

export const OrderItemsTable = styled(Table)`
`;




