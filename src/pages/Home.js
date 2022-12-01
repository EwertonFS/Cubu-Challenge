import HeaderAppBar from "../components/AppBar/HeaderAppBar";
import { Graphic } from "../components/Graphic/Graphic";
import Header from "../components/Header/Header";
import CustomizedTables from "../components/Table/CustomizedTables";
import { FigureContainer, MainContainer, Title } from "./styled";

const Home = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <Title>
          <h2>Data Science</h2>
          <p>Sua estatística em tempo real</p>
        </Title>
        {/* <HeaderAppBar /> */}
        <FigureContainer>
          <CustomizedTables />
          <Graphic />
        </FigureContainer>
      </MainContainer>
    </>
  );
};

export default Home;
