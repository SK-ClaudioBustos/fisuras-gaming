"use client"

import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { Box, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Player, PlayerData } from '../data/platersData';
import StyledTableCell from './TablePlayer/StyledTableCell';
import StyledTableRow from './TablePlayer/StyledTableRow';
import getCorrectColor from './TablePlayer/functions';

const tableStyles = {
  width: "80%",
  margin: "auto",
  boxShadow: "none",
  borderRadius: "0px",
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
                      <WorkspacePremiumIcon sx={{ fontSize: "2vw" }} />
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
