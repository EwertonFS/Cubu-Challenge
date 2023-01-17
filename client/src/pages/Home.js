import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Graphic } from "../components/Graphic/Graphic";
import Header from "../components/Header/Header";
import CustomizedTables from "../components/Table/CustomizedTables";
import { ContextApi } from "../context";
import { Container, FigureContainer, MainContainer, Title } from "./styled";

 const Home = () => {
  //passo 1º vou receber a request no useeffect
  const [shareholder,setShareholder]= useState(
     [])

    const getShareholder = () => {
    //requisição testando o back
    axios.get('https://cubu-challenge-server.onrender.com/users/shareholders')
    .then(response => {
       console.log(response)
      setShareholder(response.data)
    })
    

  };

  
  useEffect(() => {
    //mostrar dados do Banco
    getShareholder();
  });

 


  return (
    <>
      <ContextApi.Provider value={shareholder}>
    <Container>
      <Header />
        <MainContainer>
          <Title>
            <h2>Data Science</h2>
            <p>Sua estatística em tempo real</p>
          </Title>
          <FigureContainer>
            <CustomizedTables />
            <Graphic />
          </FigureContainer>
        </MainContainer>
      </Container>
      </ContextApi.Provider>
    </>
  );
};

export default Home;
