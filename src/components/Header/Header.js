import { ButtonBase, Input, InputBase, TextField } from "@mui/material";
import { ContainerHeader } from "./styled";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
const Header = () => {
  return (
    <ContainerHeader>
      
      <p> Cubus </p>
      
     
      
      <TextField
            required
            id="filled-required"
            label="Name"
            placeholder="Nome"
            variant="filled" />
            
      <TextField
            required
            id="filled-required"
            label="LastName"
            placeholder="Sobrenome"
            variant="filled" />
      
      
      <TextField
       required
       id="filled-required"
       label="Number %"
       placeholder="Participation"
       variant="filled"
       type="number"/>
      
      <Button color="primary" variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
      

    </ContainerHeader>
  );
};
export default Header;
