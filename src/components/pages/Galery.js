import React from 'react';
import './Galery.css';
import { Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Galeria001, Galeria003 } from './../../images/galery/index';
import Loading from '../effects/Loading';


class Galery extends React.Component {
    displayName = Galery.name

    constructor(props) {
        super(props);
        this.state = {
            imageLoaded: false,
            videoLoaded: false
        };
        this.setImageLoaded = this.setImageLoaded.bind(this);
        this.setVideoLoaded = this.setVideoLoaded.bind(this);
    }

    setImageLoaded(value) {
        this.setState({
            imageLoaded: value
        })
    }

    setVideoLoaded(value) {
        this.setState({
            videoLoaded: value
        })
    }

    render() {

        let imageGalery = this.state.imageLoaded ? (null) : (<Loading />);
        let videoGalery = this.state.videoLoaded ? (null) : (<Loading />);


        return (
            <div className="galery">
                <h1>Galería</h1>
                <Row className="justify-content-md-center">
                    <Col lg>
                        <div className="portada-img">
                            <Link to="/imagenes">
                                <h3>Imágenes</h3>
                                <Image 
                                    src={Galeria001} 
                                    roundedCircle
                                    onLoad={() => this.setImageLoaded(true)} 
                                />
                                {imageGalery}
                            </Link>
                        </div>
                    </Col>
                    <Col lg>
                        <div className="portada-video">
                            <Link to="/videos">
                                <h3>Vídeos</h3>
                                <Image 
                                    src={Galeria003} 
                                    roundedCircle
                                    onLoad={() => this.setVideoLoaded(true)}
                                />
                                {videoGalery}
                            </Link>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
} export default Galery;
