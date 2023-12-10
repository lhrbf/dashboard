import { useState } from "react";
import { Button, Card, Container, Modal, Row, Table } from "react-bootstrap";
import { AiOutlineUser } from "react-icons/ai";

function QtdUsersData(){

const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return(
<Container className="mt-4 align-center">
    <Card className="text-center shadow my-3 border">
      <Card.Header>Usuarios Cadastrados</Card.Header>
      <Card.Body>
        <Row className= 'align-center d-flex justify-content-center'>
            <AiOutlineUser className='fs-1 mt-2'/>
                <p className='fs-3 mt-2'>3 usuários cadastrados</p>
        </Row>
      </Card.Body>
    </Card>
    <Card className="text-center shadow border">
        <Card.Header>Data de cadastro dos usuarios</Card.Header>
      <Card.Body>
        <p className="fs-3 py-2">Usuario mais antigo cadastrado: Nome 00/00/0000</p>
        <Button className="mb-1 bg-danger-subtle text-black border-danger" onClick={handleShow}>
        Mostrar mais
        </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Usuarios</Modal.Title>
        </Modal.Header>
          <Modal.Body>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Data de cadastro</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>00/00/0000</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>00/00/0000</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td>Larry</td>
                    <td>Sobrenome</td>
                    <td>00/00/0000</td>
                    </tr>
                </tbody>
            </Table>
          </Modal.Body>
        </Modal>
      </Card.Body>
    </Card>
</Container>   
)};

export default QtdUsersData;