import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Badge } from "react-bootstrap";

export default function Header() {
    return (
        <>
            <header id="main-header">

                    <div className="ad text-center d-none d-sm-block">
                        <Link to="#">
                            <img className="img-fluid" src="assets/images/banner.jpg" />
                        </Link>
                    </div>

                    <div className="position-relative d-flex flex-column align-items-center header-content no-bg">
                        <div className="nav-wrapper w-100 nav-wrapper-js">
                            <div className="container-fluid">
                                <div className="justify-content-between align-items-start d-none d-xl-flex">
                                    <nav className="nav-a">
                                        <ul className="list-unstyled d-flex m-0">
                                            <li>
                                                <Link to="/">
                                                    <img src="assets/images/logo.png" alt="TVGuide" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="tv-listings.html">TV Listings</Link>
                                            </li>
                                            <li className="active">
                                                <Link to="/new-on-tv"> New on TV</Link>
                                            </li>
                                            <li>
                                                <Link to="/new-films">New Films</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                    <div className="d-flex align-items-center flex-grow-1 justify-content-end">
                                        <Link to="#" className="sign-in" data-toggle="modal" data-target="#sign-in-modal" data-backdrop="static">Sign In</Link>
                                    </div>
                                </div>
                                <div className="d-flex d-xl-none justify-content-between align-items-center align-items-xl-start text-white mobile-nav">
                                    <div className="d-flex">
                                        <Link to="#" className="d-flex align-items-center" >
                                            <img src="assets/images/logo.png" />
                                        </Link>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <Link to="#" id="sidebarCollapse" className="text-white sidenav-btn mr-4">
                                            <span className="icon-menu"></span>
                                        </Link>
                                        <Link to="#" data-toggle="modal" data-target="#sign-in-modal" data-backdrop="static" className="user-nav-btn">
                                            <span className="icon-user-solid-circle"></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

        </>
        // <>
        //     <section className="banner-color">
        //         <Navbar.Brand>
        //             <img
        //                 className="d-block mx-auto img-fluid w-60 p-4"
        //                 src={"assets/images/banner.jpg"}
        //                 alt={""}
        //             />
        //         </Navbar.Brand>
        //     </section>

        //     <Navbar bg="black" variant="dark" expand="lg">
        //         <Container fluid>
        //             <Navbar.Brand className="ms-5">
        //                 <img
        //                     src={"assets/images/logo.png"}
        //                     width="70px"
        //                     height="60px"
        //                     alt=""
        //                 />{" "}
        //             </Navbar.Brand>
        //             {/* <Navbar.Brand className="nav-wrapper w-100 nav-wrapper-js">
        //         <img src={"assets/images/bg.jpg"} alt="" />{" "}
        //       </Navbar.Brand> */}
        //             {/* <div>
        //       <Navbar.Toggle className="coloring" />{" "}
        //     </div> */}
        //             <Navbar.Toggle
        //                 id="boot-icon"
        //                 className="bi bi-person-circle justify-content-end me-3"
        //             ></Navbar.Toggle>

        //             <Navbar.Collapse id="navbarScroll">
        //                 <Nav className="me-auto my-2 my-lg-0">
        //                     <Nav.Link href="#">TV Listings</Nav.Link>
        //                     <Nav.Link href="#">New on TV</Nav.Link>
        //                     <Nav.Link href="#">New Films</Nav.Link>
        //                 </Nav>
        //                 {/* <img src={"assets/images/bg.jpg"} alt="" />{" "} */}
        //                 <div className="d-flex align-items-center justify-content-end me-5">
        //                     <Nav.Link
        //                         href="#"
        //                         className="sign-in"
        //                         data-toggle="modal"
        //                         data-target="#sign-in-modal"
        //                         data-backdrop="static"
        //                     >
        //                         <Badge pill bg="light" text="dark">
        //                             SIGN IN
        //                         </Badge>
        //                     </Nav.Link>
        //                 </div>
        //             </Navbar.Collapse>
        //         </Container>
        //     </Navbar>
        // </>
    )
}
