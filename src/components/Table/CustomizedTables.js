import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ContainerTable } from './styled';
import { ContextApi } from '../../context';


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
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


//  vai ser aqui onde vou trazer api transformar mock em state
// criar funcão executa Api 


const rows = [
{"id" : 1,"name": "Carlos" , "lastName" : "Moura","participation": "5%"},
{"id" : 2,"name": "Fernanda" , "lastName" : "Oliveira","participation":"15%"},
{"id" : 3,"name": "Hugo" , "lastName" : "Silva","participation":"20%"},
{"id" : 4,"name": "Eliza" , "lastName" : "Souza","participation":"25%"},
{"id" : 5,"name": "Anderson" , "lastName" : "Santos","participation":"40%"}
]




export default function CustomizedTables() {

  const rows = React.useContext(ContextApi);
  
  
  return (
        
        <ContainerTable>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth:300 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">Code</StyledTableCell>
            <StyledTableCell align="right">First Name</StyledTableCell>
            <StyledTableCell align="right">Last Name</StyledTableCell>
            <StyledTableCell align="right">Participation</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>

              <StyledTableCell align="right"infoName={row.name}>{row.name}
              </StyledTableCell>

              <StyledTableCell align="right">
                {row.lastName}
                </StyledTableCell>

              <StyledTableCell align="right">
                {row.participation}
                </StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </ContainerTable>
    
  );
}