import { color3, color4 } from '@/app/styles/colors';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    padding: "1.5vw",
    [`&.${tableCellClasses.head}`]: {
      borderBottom: "none",
      backgroundColor: color4,
      fontSize: "2vw",
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      borderBottom: "none",
      fontSize: "2vw",
      backgroundColor: color3,
    },
  }));

export default StyledTableCell;