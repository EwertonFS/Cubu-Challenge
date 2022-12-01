import { Graphic } from "../components/Graphic/Graphic";
import Header from "../components/Header/Header";
import CustomizedTables from "../components/Table/CustomizedTables";
import { ContextApi } from "../context";
import { FigureContainer, MainContainer, Title } from "./styled";

const Home = () => {
  //passo 1º vou receber a request no useeffect
  const rows = [
    { id: 1, name: "Carlos", lastName: "Moura", participation: "5%" },
    { id: 2, name: "Fernanda", lastName: "Oliveira", participation: "15%" },
    { id: 3, name: "Hugo", lastName: "Silva", participation: "20%" },
    { id: 4, name: "Eliza", lastName: "Souza", participation: "25%" },
    { id: 5, name: "Anderson", lastName: "Santos", participation: "40%" },
  ];

  return (
    <>
      <ContextApi.Provider value={rows}>
        <Header />
        <MainContainer>
          <Title>
            <h2>Data Science</h2>
            <p>Sua estatística em tempo real</p>
          </Title>
          {/* <HeaderAppBar /> */}
          <FigureContainer>
            <CustomizedTables value={rows} />
            <Graphic value ={rows}/>
          </FigureContainer>
        </MainContainer>
      </ContextApi.Provider>
    </>
  );
};

export default Home;
