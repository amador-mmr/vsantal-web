import React from 'react';
import './Product.css';
import { CdPortadaImg } from '../../images/products';
import Loading from '../effects/Loading';
import { Row, Col, Image, Container } from 'react-bootstrap';
import products from './../../config/products.json';


class Product extends React.Component {
    displayName = Product.name

    constructor(props) {
        super(props);
        this.state = {
            idProduct: this.props.productId,
            price: 0.00,
            name: "",
            description: "",
            delivery: [
                {
                    id: 1,
                    price: 1.00,
                    text: "España"
                }, 
                {
                    id: 2,
                    price: 2.00,
                    text: "Europa"
                },
                {
                    id: 3,
                    price: 3.00,
                    text: "Resto del mundo" 
                } 
            ],
            deliverySelected: 1.00,
            loaded: false,
            imageLoaded: false
        };
        this.load = this.load.bind(this);
        this.onChangeDelivery = this.onChangeDelivery.bind(this);
        this.setLoaded = this.setLoaded.bind(this);
        this.setImageLoaded = this.setImageLoaded.bind(this);
    }

    componentDidMount() {
        let p;
        products.map((item) => {
            if (item.id === this.state.idProduct) {
                p = item;
                return("");
            }
            else {
                return ("");
            }
        });
        this.setState({
            price: p.product.price,
            name: p.product.name,
            description: p.product.description
        });
    }

    load() {
        this.state({
            loaded:false
        })
    }

    setLoaded(value) {
        this.setState({
            loaded: value
        });
    }

    setImageLoaded(value) {
        this.setState({
            imageLoaded: value
        })
    }

    onChangeDelivery(event) {
        this.setState({
            deliverySelected: event.target.value
        });
    }

    render() {

        const optionsDelivery = this.state.delivery.map((value) => {
            return (
                <option key={value.id} value={value.price}>{value.text}</option>
            )
        });

        let imageProduct = this.state.imageLoaded ? 
            ( null ) : 
            ( <Loading /> );

        return (
            <div className="product">
                <Container>
                    <Row xs={1} md={2}>
                        <Col>
                            <Image 
                                src={CdPortadaImg} 
                                alt={this.state.name} 
                                style={ this.state.imageLoaded ? 
                                    {width:"250px", padding: "10px", margin: "0 auto"} : 
                                    {display:'none'}}
                                onLoad={() => this.setImageLoaded(true)} 
                                rounded 
                            />
                            { imageProduct }
                        </Col>
                        <Col>
                            <h3>{this.state.name}</h3>
                            <div className="product-description">
                                <p>{this.state.description}</p>
                            </div>
                            <div className="product-price">
                                { this.state.price } €
                            </div>
                            <p>Indica tu ubicación:</p>
                            <div className="product-delivery">
                            <select onChange={this.onChangeDelivery}>
                                { optionsDelivery }
                            </select>
                                <p>+ { this.state.deliverySelected } € envío</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }

} export default Product;