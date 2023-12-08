import Cards from "../components/Cards";
import NavbarHome from "../components/NavbarHome";
import ContainerSup from "../components/ContainerSup";
import QtdUsersData from "../components/QtdUsersData";

function Home(){
    return(
        <>
        <NavbarHome />
        <ContainerSup />
        <QtdUsersData />
        <Cards />
        </>
    );
};

export default Home;