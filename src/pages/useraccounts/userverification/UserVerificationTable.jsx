import { styled } from '@mui/material/styles';
import { TableRow, TableCell, Button } from '@mui/material';
import CustomTable from '../../../components/table/customTable/CustomTable';

export const UserVerificationTable = ({ data }) => {

    const head = ["Full Name", "Verification Request Date", "Action"];

    return (
        <CustomTable
            headers={head}
            tableRows={
                data?.length > 0 ?
                    data?.map((row, i) => (
                        <StyledTableRow key={i}>
                            <StyledTableCell align="center" component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="center" >
                                {row.date}
                            </StyledTableCell>
                            <StyledTableCell align="center" width={200}>
                                <Button variant="primary" className="view-button">View Details</Button>
                            </StyledTableCell>
                        </StyledTableRow>))
                    :
                    <StyledTableRow ><StyledTableCell align="center" colSpan={9}>No available data</StyledTableCell></StyledTableRow>
            } />
    );
};

const StyledTableRow = styled(TableRow)(`
border-bottom: 1px solid black;
gap: 10px;

`);

const StyledTableCell = styled(TableCell)(`
padding: 8px ;
`);