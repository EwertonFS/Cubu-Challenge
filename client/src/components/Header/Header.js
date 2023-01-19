import { TextField } from "@mui/material";
import {
  ContainerForm,
  ContainerHeader,
  LastName,
  Name,
  Participation,
} from "./styled";
import Button from "@mui/material/Button";

import { useState } from "react";
import axios from "axios";

import AddCircleOutline from "@mui/icons-material/AddCircleOutline";

import * as React from "react";
const Header = (props) => {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    participation: "",
  });

  const Onchange = (event) => {
    const { name, value } = event.target;
    // const name = [event.target.name]
    // const value = [event.target.value]
    setForm({ ...form, [name]: value });
  };

  const clearFields = () => {
    setForm({
      name: "",
      lastName: "",
      participation: "",
    });
  };

  const addShareholder = (event) => {
    event.preventDefault();
    axios
      .put(
        "https://cubu-challenge-server.onrender.com/users/shareholders",
        form
      )
      .then((response) => {
        alert("usuario adcionado comm sucesso!");

        clearFields();
      })
      .catch((error) => {
        console.log(error);
        alert("Apenas numero natural e positivo");
      });
  };

  /*  console.log(setForm) */

  return (
    <ContainerHeader>
      <ContainerForm onSubmit={addShareholder}>
        <Name>
          <TextField
            name="name"
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
            inputProps={{ inputMode:'text', pattern:'^[A-Z][a-z]+'}}
            title={"Primeira letra tem que ser maiuscula , não pode haver acentos na palavra"}
          />
        </Name>

        <LastName>
          <TextField
            name="lastName"
            value={form.lastName}
            onChange={Onchange}
            id="filled-required"
            label="LastName"
            placeholder="Sobrenome"
            variant="filled"
            type={"text"}
            size="small"
            required
            title="Primeira letra tem que ser maiuscula , não pode haver acentos na palavra"
            inputProps={{ inputMode:'text', pattern:'^[A-Z][a-z]+'}}
          />
        </LastName>

        <Participation>
          <TextField
            name="participation"
            value={form.participation}
            onChange={Onchange}
            id="filled-required"
            label="Number $"
            placeholder="Participação"
            variant="filled"
            type={"number"}
            size="small"
            required
            title="Somente numeros Naturais positivos , decimais serão arrendondados"
            pattern="/[^\d]+/g" 
            inputProps={{ pattern:'/[d]/m'}} 
          />
        </Participation>

        <Button
          color="primary"
          variant="contained"
          size="large"
          endIcon={<AddCircleOutline />}
          type={"submit"}
        >
          ADD
        </Button>
      </ContainerForm>
    </ContainerHeader>
  );
};
export default Header;
