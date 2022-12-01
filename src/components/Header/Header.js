import { TextField } from "@mui/material";
import {
  ButtonGo,
  ContainerForm,
  ContainerHeader,
  InputLastName,
  InputName,
  InputParticipation,
  TitleHeader,
} from "./styled";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";

const Header = () => {
 const [name, setName] = useState("")
 const [lastName, setLastName] = useState("")
 const [participation,setParticipation]= useState("")


 const handleUpdateName=(e)=>{
  setName(e.target.value)
 }

 const handleUpdateLastName =(e)=>{
  setLastName(e.target.value)
 }

 const handleUpdateParticipation=(e)=>{
  setParticipation(e.target.value)
 }

 const request = () =>{
  const dado = {"name":name, "lastName" : lastName,"participation":participation}
  console.log(dado)
 }

 console.log(name)
 //aqui vou mandar os dados para o Back End no formato do objeto "dado"
//---------------------------------------------------------------------//------------------------
 
 


  return (
    <ContainerHeader>
      <TitleHeader>
        <p> Cubu </p>
      </TitleHeader>  
      {/* <ContainerForm> */}
      {/* <form> */}
      <InputName>
        <TextField
          required
          id="filled-required"
          label="Name"
          placeholder="Nome"
          variant="filled"
          size="small"
          value={name}
        
          // onChange={(e) =>  setName(e.target.value) }
          onChange={handleUpdateName}
  
        />
      </InputName>

      <InputLastName>
        <TextField
          required
          id="filled-required"
          label="LastName"
          placeholder="Sobrenome"
          variant="filled"
          size="small"
          value={lastName}
          onChange={handleUpdateLastName}
        />
      </InputLastName>

      <InputParticipation>
        <TextField
          required
          id="filled-required"
          label="Number %"
          placeholder="Participation"
          variant="filled"
          type="number"
          size="small"
          value={participation}
          onChange={handleUpdateParticipation}
        />
      </InputParticipation>
      <ButtonGo>
        <Button
          color="primary"
          variant="contained"
          size="large"
          endIcon={<SendIcon />}
        
        onClick={request}
        >
          Send
        </Button >
      
      </ButtonGo>
      {/* </form> */}
      {/* </ContainerForm> */}
    </ContainerHeader>
  );
};
export default Header;
