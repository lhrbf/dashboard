import { Card, Container } from "react-bootstrap";
import { AiOutlineUser } from "react-icons/ai";

function QtdUsersData(){
    return(
<Container className="mt-4">
    <Card className="text-center shadow my-3" border= "danger-subtle">
      <Card.Header>Usuarios Cadastrados</Card.Header>
      <Card.Body>
            <AiOutlineUser />
                <p>3 usuários cadastrados</p>
      </Card.Body>
    </Card>
        <Card className="text-center shadow" border= "danger-subtle">
        <Card.Header>Data de cadastro dos usuarios</Card.Header>
        <Card.Body>
             <p>00/00/0000</p>
        </Card.Body>
        </Card>
</Container>   
    )
}

export default QtdUsersData;