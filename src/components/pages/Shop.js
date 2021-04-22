import React from 'react';
import './Shop.css';
import Product from '../products/Product';
import { Row, Col } from 'react-bootstrap';


class Shop extends React.Component {
    displayName = Shop.name

    render() {

        const products =
            <Col md="auto">
                <Product productId={1} />
            </Col>;

        return (
            <div className="shop">
                <h1>Tienda</h1>
                <div className="products">
                    <Row>
                        {products}
                    </Row>
                </div>


            </div>
        );
    }
} export default Shop;

