import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Link from '@mui/material/Link';

import { Button } from "@mui/material";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import InfoIcon from '@mui/icons-material/Info';

import { DateExt } from "../../../../utils/helpers";

function DepositsListData({ deposits }) {
  return (
    <TableRow key={deposits.transactionID} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
        <TableCell component="th" scope="row"> {deposits.displayName}</TableCell>
        <TableCell align="center">{deposits.amount}</TableCell>
        <TableCell align="center">{deposits.transactionStatus}</TableCell>
        <TableCell align="center">{deposits.paymentMethod}</TableCell>
        <TableCell>{DateExt.readableDate(deposits.createdOn)}</TableCell>
    </TableRow>
  )
}

export default DepositsListData
