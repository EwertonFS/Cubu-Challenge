import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ContainerTable } from "./styled";
import { ContextApi } from "../../context";
import { Delete } from "@mui/icons-material";
import { Button } from "@mui/material";
import axios from "axios";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CustomizedTables() {
  const setShareholder = React.useContext(ContextApi);

  const deleteShareholder = (id) => {
    axios
      .delete(
        `https://cubu-challenge-server.onrender.com/users/shareholders/${id}`
      )
      .then((response) => {
        if (response === 200) {
          setShareholder.filter((shareholders) => shareholders.id !== id);
        }
        alert("usuário deletado com sucesso");
      })
      .catch((error) => {
        // console.log(error)
        alert("algo deu errado tente em outro momento");
      });
  };

  return (
    <ContainerTable>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 300 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="right">Code</StyledTableCell>
              <StyledTableCell align="right">First Name</StyledTableCell>
              <StyledTableCell align="right">Last Name</StyledTableCell>
              <StyledTableCell align="right">Participation</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {setShareholder.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.id}
                </StyledTableCell>

                <StyledTableCell align="right" infoName={row.name}>
                  {row.name}
                </StyledTableCell>

                <StyledTableCell align="right">{row.lastName}</StyledTableCell>

                <StyledTableCell align="right">
                  {row.participation}
                </StyledTableCell>

                <StyledTableCell align="right">
                  <Button
                    color="primary"
                    variant="outlined"
                    size="small"
                    endIcon={<Delete />}
                    onClick={() => deleteShareholder(row.id)}
                  ></Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ContainerTable>
  );
}
