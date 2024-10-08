import { styled, TableRow } from "@mui/material";


const StyledTableRow = styled(TableRow)(() => ({
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export default StyledTableRow;