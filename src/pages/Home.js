import NavbarHome from "../components/NavbarHome";
import ContainerSup from "../components/ContainerSup";
import QtdUsersData from "../components/QtdUsersData";
import GraficoDocType from "../components/GraficoDocType";
import GraficoSegmentos from "../components/GraficoSegmentos";
import { Col, Row } from "react-bootstrap";

function Home(){
    return(
        <>
        <NavbarHome />
        <ContainerSup />
        <QtdUsersData />
        <Row>
          <Col>
            <GraficoDocType />
          </Col>
            <Col>
                <GraficoSegmentos />
            </Col>
        </Row>
        </>
    );
};

export default Home;