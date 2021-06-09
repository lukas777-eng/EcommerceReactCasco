import React from 'react';
import { useParams,Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './index.css';



const AfterCheckout = () => {
    const { token,name } = useParams();
    return (
        <Container >
            <Row className="justify-content-center">
                <Col > 
                    <h1>Listo {name}!</h1>
                    <h3>Tu compra se proceso con exito.</h3>
                    <h3>Pronto nos comunicaremos con vos para que realices el pago.</h3>
                    <h2>Tu token de compra es: </h2><h2 style={{fontWeight:"bolder",textDecoration: "underline"}}>{token}</h2>
                    <Button variant="outline-dark" as={Link} to={"/"} block>Volver a la home</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default AfterCheckout