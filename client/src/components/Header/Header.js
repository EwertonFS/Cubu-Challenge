import { TextField } from "@mui/material";
import {
  ButtonGo,
  ContainerForm,
  ContainerHeader,
  InputLastName,
  InputName,
  InputParticipation,
  LastName,
  Name,
  Participation,
  TitleHeader,
} from "./styled";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import axios from "axios";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddCircleOutline from "@mui/icons-material/AddCircleOutline";

const Header = () => {
  // const [name, setName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [participation, setParticipation] = useState("");
  
  // const handleUpdateName = (event) => {
  //   setName(event.target.value);
  // };
  
  // const handleUpdateLastName = (event) => {
  //   setLastName(event.target.value);
  // };
  
  // const handleUpdateParticipation = (event) => {
  //   setParticipation(event.target.value);
  // };
  
  // const request = () => {
  //   // e.preventdefault()
  //   const dado = {
  //     name: name,
  //     lastName: lastName,
  //     participation: participation,
  //   };
  //   console.log(dado);
  // };
  
  //  console.log(name)
  //aqui vou mandar os dados para o Back End no formato do objeto "dado"
  // e se tudo der certo incluir---------------------------------------------------------------------//------------------------
  //unificando indico como quero receber o objeto
  const [form,setForm] = useState({name:"",lastName:"",participation:""})

  const Onchange = (event) =>{
    //tudo que tem no form , referencie o objeto e pegue  o valor
    //depois atribuo variaveis para chave e valor
    //desistruturação
    const {name , value }= event.target
    // const name = [event.target.name]
    // const value = [event.target.value]
    setForm({...form,[name]:value})
  }


  const addShareholder = (event) => {
    event.preventDefault();
    axios.put("http://localhost:3003/shareholders",form)
    .then(response =>{
      console.log(response)
      alert("usuario adcionado comm sucesso!")
    }).catch(error=>{
      console.log(error)
      alert("algo deu errado tente mais tarde")
    })
  };

  console.log(setForm)

  return (
    <ContainerHeader>
      {/* <TitleHeader>
        <p> Cubu </p>
      </TitleHeader>   */}
      {/* <ContainerForm > */}
      <ContainerForm onSubmit={addShareholder}>
        <Name>
          <TextField
            name = "name"
            value={form.name}
            onChange={Onchange}
            id="filled-required"
            label="Name"
            placeholder="Nome"
            variant="filled"
            type={"text"}
            size="small"
            required
            pattern="[A-z]"
            // inputProps={{inputMode:'text', pattern: "[A-z]" }}
            title={"Apenas letras são consideradas"}
            // ou onChange={(e) =>  setName(e.target.value) }
          />
        </Name>

        <LastName>
          <TextField
            name ="lastName"
            value={form.lastName}
            onChange={Onchange}
            id="filled-required"
            label="LastName"
            placeholder="Sobrenome"
            variant="filled"
            type={"text"}
            size="small"
            required
            //inputProps={{ inputMode:'text',/* pattern:'/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/'*/}}
            title ="Apenas letras são consideradas"
          />
        </LastName>

        <Participation>
          <TextField
            name = "participation"
            value={form.participation}
            onChange={Onchange}
            id="filled-required"
            label="Number $"
            placeholder="Participação"
            variant="filled"
            type={"number"}
            size="small"
            required
          />
        </Participation>
        {/* <ButtonGo> */}
        <Button
          color="primary"
          variant="contained"
          size="large"
          endIcon={<AddCircleOutline />}
          type={"submit"}

          // onClick={request}
        >
          ADD
        </Button>

        {/* </ButtonGo> */}
      </ContainerForm>
      {/* </ContainerForm> */}
    </ContainerHeader>
  );
};
export default Header;
