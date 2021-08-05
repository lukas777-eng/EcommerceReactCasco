import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import './home.css';

const Home = () => {
    return (
        <>
        <Carousel prevLabel="" nextLabel="" fade={true} className="border border-dark" >
                        <Carousel.Item>
                            <Image src="../images/ps5banner.jpg" thumbnail className="d-block w-100 border-0" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src="../images/xboxseries.jpg" thumbnail className="d-block w-100 border-0" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src="../images/nintendoswitch.jpg" thumbnail className="d-block w-100 border-0" />
                        </Carousel.Item>
        </Carousel>


    </>
    );
};

export default Home;