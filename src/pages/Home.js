import NavbarHome from "../components/NavbarHome";
import ContainerSup from "../components/ContainerSup";
import QtdUsersData from "../components/QtdUsersData";
import GraficoDocType from "../components/GraficoDocType";
import GraficoSegmentos from "../components/GraficoSegmentos";
import { Col, Image, Row } from "react-bootstrap";
import logo from '../imgs/BackgroundEraser_20231112_212322950.png'

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
        <Image src={logo} alt="logo Di2Win" />
        </>
    );
};

export default Home;