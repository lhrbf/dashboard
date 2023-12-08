import { Col, Container, Row } from "react-bootstrap";
import CardDataUser from "./CardDataUser";
import CardDocType from "./CardDocType";
import CardUser from "./CardUser";

function Cards(){
    return(
    <Container>
        <Row className="gap-1 pt-4">
            <Col>
                <CardUser />
            </Col>
                <Col>
                    <CardDocType />
                </Col>
                    <Col>
                        <CardDataUser />
                    </Col>
        </Row>
    </Container>
    )
};

export default Cards;