import { Graphic } from "../components/Graphic/Graphic";
import Header from "../components/Header/Header";
import CustomizedTables from "../components/Table/CustomizedTables";
import { ContextApi } from "../context";
import { FigureContainer, MainContainer, Title } from "./styled";

const Home = () => {
  //passo 1º vou receber a request no useeffect
  const rows = [
  { id: 1, name: "Carlos", lastName: "Moura", participation: 25 },
  { id: 2, name: "Fernanda", lastName: "Oliveira", participation: 30 },
  { id: 3, name: "Hugo", lastName: "Silva", participation: 30 },
  { id: 4, name: "Eliza", lastName: "Souza", participation: 20 },
  { id: 5, name: "Anderson", lastName: "Santos", participation: 30 },
  { id: 6, name: "Ellon", lastName: "Musk", participation: 50},
  { id: 7, name: "Roberto", lastName: "Justus", participation: 40},
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
            <CustomizedTables  />
            <Graphic />
          </FigureContainer>
        </MainContainer>
      </ContextApi.Provider>
    </>
  );
};

export default Home;
