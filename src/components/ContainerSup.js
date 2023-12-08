import { Col, Container, Image, Row } from "react-bootstrap";


function ContainerSup(){
    return(
        <Container fluid className='bg-dark py-4' border="danger-subtle">
            <Row className='justify-content-beetween'>
              <Col className='ms-1 text-white'>
                <Row>
                    <h3>Dashboard</h3><br></br>
                </Row>
                    <Row>
                        <h5>Análise de dados</h5>
                    </Row>
              </Col>
                <Col>
                    <Image src= ""/>
                </Col>
            </Row>
        </Container>
    )
}

export default ContainerSup;