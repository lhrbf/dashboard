import { Col, Container, Row } from "react-bootstrap";
import CardDocType from "./CardDocType";
import CardSegmentos from "./CardSegmentos";

function Cards(){
    return(
    <Container className= 'mt-4 d-flex justify-content-center align-center'>
        <Row className="gap-2 align-center">
                <Col>
                    <CardDocType />
                </Col>
                    <Col>
                        <CardSegmentos />
                    </Col>
        </Row>
    </Container>
    )
};

export default Cards;