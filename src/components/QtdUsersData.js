import { Card, Row, Col, Container } from "react-bootstrap";

function QtdUsersData(){
    return(
<Container className="mt-4">
    <Card className="text-center shadow my-3" border= "danger-subtle">
      <Card.Header>Usuarios Cadastrados</Card.Header>
      <Card.Body>
        <Row className='p-2'>
            <Col>
                Grafico
            </Col>
        </Row>
      </Card.Body>
    </Card>
        <Card className="text-center shadow" border= "danger-subtle">
        <Card.Header>Data de cadastro dos usuarios</Card.Header>
        <Card.Body>
            <Row className='p-2'>
                <Col >
                    Grafico
                </Col>
            </Row>
        </Card.Body>
        </Card>
</Container>   
    )
}

export default QtdUsersData;