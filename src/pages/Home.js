import HeaderAppBar from "../components/AppBar/HeaderAppBar";
import Header from "../components/Header/Header";
import CustomizedTables from "../components/Table/CustomizedTables";
import { MainContainer, Title } from "./styled";




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
        <CustomizedTables />
        </MainContainer>
     </>
    );
  }
  
  export default Home;
  