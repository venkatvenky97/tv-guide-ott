import React from 'react'
import {
    Container, Row, Col, Card, CardImg, CardBody,
    CardTitle, CardText, CardImgOverlay
} from "reactstrap";
import Header from './Header';
import Footer from './Footer';

export default function LandingPage() {
    return (
        <>
            <Header />

             {/* <Container className='mt-5'>
               <Row>
                    <Col>
                        <Card id="listing-section">
                            <div className="col-lg grid-item">
                                <div className="c-card text-white d-flex flex-column justify-content-between channel bbc-two">
                                    <div className="col p-0 d-flex justify-content-between align-items-start">
                                        <div className="logo">
                                            <div className="d-flex align-items-center">
                                                <img src="assets/images/channels/bbc-two.png" alt="BBC Two" />
                                                <span className="ml-2 date">6.00pm<br />Today</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="desc col d-flex justify-content-end flex-column">
                                        <h6 className="title font-weight-bold">
                                            Princess Margaret: The Rebel Royal
                                        </h6>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="sub-title">S1 E8</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card id="listing-section">
                            <div className="col-lg grid-item">
                                <div className="c-card text-white d-flex flex-column justify-content-between channel bbc-two">
                                    <div className="col p-0 d-flex justify-content-between align-items-start">
                                        <div className="logo">
                                            <div className="d-flex align-items-center">
                                                <img src="assets/images/channels/bbc-two.png" alt="BBC Two" />
                                                <span className="ml-2 date">6.00pm<br />Today</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="desc col d-flex justify-content-end flex-column">
                                        <h6 className="title font-weight-bold">
                                            Princess Margaret: The Rebel Royal
                                        </h6>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="sub-title">S1 E8</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card id="listing-section">
                            <div className="col-lg grid-item">
                                <div className="c-card text-white d-flex flex-column justify-content-between channel bbc-two">
                                    <div className="col p-0 d-flex justify-content-between align-items-start">
                                        <div className="logo">
                                            <div className="d-flex align-items-center">
                                                <img src="assets/images/channels/bbc-two.png" alt="BBC Two" />
                                                <span className="ml-2 date">6.00pm<br />Today</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="desc col d-flex justify-content-end flex-column">
                                        <h6 className="title font-weight-bold">
                                            Princess Margaret: The Rebel Royal
                                        </h6>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="sub-title">S1 E8</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container> */}

            {/* <Container className='mt-5'>
                <Row>
                    <Col>
                        <Card inverse>
                            <CardImg
                                alt="Card image cap"
                                src="assets/images/tv-listings/card-bg.jpg"
                                style={{
                                    height: 180
                                }}
                                width="70%"
                            />
                            <CardImgOverlay>
                                    <CardTitle tag="h5">
                                    <Row>
                                        <Col xs="2">
                                            <CardImg
                                                alt="BBC Two"
                                                src="assets/images/channels/bbc-two.png"
                                                style={{
                                                    height: 24,
                                                    width: 44
                                                }}
                                            />
                                        </Col>
                                        <Col xs="4">
                                            <p>
                                                6.00pm<br />
                                                Today
                                            </p>
                                        </Col>
                                    </Row>
                                    </CardTitle>
                                <CardText>
                                    Princess Margaret: The Rebel Royal
                                </CardText>
                            </CardImgOverlay>
                        </Card>
                    </Col>
                    <Col>
                        <Card inverse>
                            <CardImg
                                alt="Card image cap"
                                src="assets/images/tv-listings/card-bg.jpg"
                                style={{
                                    height: 180
                                }}
                                width="70%"
                            />
                            <CardImgOverlay>
                                    <CardTitle tag="h5">
                                    <Row>
                                        <Col xs="2">
                                            <CardImg
                                                alt="BBC Two"
                                                src="assets/images/channels/bbc-two.png"
                                                style={{
                                                    height: 24,
                                                    width: 44
                                                }}
                                            />
                                        </Col>
                                        <Col xs="4">
                                            <p>
                                                6.00pm<br />
                                                Today
                                            </p>
                                        </Col>
                                    </Row>
                                    </CardTitle>
                                <CardText>
                                    Princess Margaret: The Rebel Royal
                                </CardText>
                            </CardImgOverlay>
                        </Card>
                    </Col>
                    <Col>
                        <Card inverse>
                            <CardImg
                                alt="Card image cap"
                                src="assets/images/tv-listings/card-bg.jpg"
                                style={{
                                    height: 180
                                }}
                                width="70%"
                            />
                            <CardImgOverlay>
                                    <CardTitle tag="h5">
                                    <Row>
                                        <Col xs="2">
                                            <CardImg
                                                alt="BBC Two"
                                                src="assets/images/channels/bbc-two.png"
                                                style={{
                                                    height: 24,
                                                    width: 44
                                                }}
                                            />
                                        </Col>
                                        <Col xs="4">
                                            <p>
                                                6.00pm<br />
                                                Today
                                            </p>
                                        </Col>
                                    </Row>
                                    </CardTitle>
                                <CardText>
                                    Princess Margaret: The Rebel Royal
                                </CardText>
                            </CardImgOverlay>
                        </Card>
                    </Col>
                </Row>
            </Container> */}

            <Footer />

        </>
    )
}

