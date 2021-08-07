import React, { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount'


const Info = ({ item, is }) => {
    const [initial] = useState(0)


    return (
        <>
        <Col sm={6} >
            <Card bg="dark" text="light" className="h-100">
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Title>${item.price}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <ItemCount firstStock={item.stock} initial={initial}
                        plus={plus} minus={minus} item={item}/>
                </Card.Footer>
            </Card>
        </Col>
        </>
    )
}

const minus = (quantity, setQuantity) => {
    return () => {
        if (quantity > 0) { setQuantity(quantity - 1) }
    }
}

const plus = (quantity, stock, setQuantity) => {
    return () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        } else { alert('No podes añadir mas de este producto ya que el stock es de ' + stock) }
    }
}

export default Info