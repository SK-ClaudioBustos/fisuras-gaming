"use client"

import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { Box, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Player, PlayerData } from '../data/platersData';
import { color1, color3 } from '../styles/colors';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: color3,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: "1.3vw",
    backgroundColor: color1,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const tableStyles = { width: "50vw", margin: "auto", boxShadow: "none", borderRadius: "10px" }

const getCorrectColor = (key: number): string => {
  switch (key) {
    case 0:
      return "#FFD700"
    case 1:
      return "#fff"
    case 2:
      return "#b87333"
    default:
      return "#C1C2C3";
  }
}

export default function TablePlayerScore() {
  return (
    <Box margin={"10vw"}>
      <Box sx={{ display: "flex", flexDirection: "column", textAlign: "center", marginBottom: "1rem" }}>
        <Typography fontSize={"3vw"}>
          Mejores jugadores
        </Typography>
        <Typography fontSize={"2vw"}>
          Aquí podras ver algunos de los mejores jugadores del servidor
        </Typography>
      </Box>
      <TableContainer sx={tableStyles} component={Paper}>
        <Table aria-label="tabla personalizada">
          <TableHead>
            <TableRow>
              <StyledTableCell >Nombre</StyledTableCell>
              <StyledTableCell align="right">Frags</StyledTableCell>
              <StyledTableCell align="right">Aciertos</StyledTableCell>
              <StyledTableCell align="right">Disparos</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {PlayerData.map((player: Player, key) => (
              <StyledTableRow key={key}>
                <StyledTableCell component="th" sx={{ color: getCorrectColor(key) }} scope="row">
                  {player.nick}
                  {
                    [0, 1, 2].includes(key) && (
                      <WorkspacePremiumIcon sx={{ fontSize: "1rem" }} />
                    )
                  }
                </StyledTableCell>
                <StyledTableCell sx={{ color: getCorrectColor(key) }} align="right">{player.frags}</StyledTableCell>
                <StyledTableCell sx={{ color: getCorrectColor(key) }} align="right">{player.aciertos}</StyledTableCell>
                <StyledTableCell sx={{ color: getCorrectColor(key) }} align="right">{player.disparos}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
