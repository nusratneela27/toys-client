import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import './Header.css'
import { AuthContext } from '../../../providers/AuthProviders';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    const renderTooltip = (props) => (
        <Tooltip id='button-tooltip' {...props}>
            <span>{user.displayName}</span>
        </Tooltip>
    )
    return (
        <Navbar collapseOnSelect expand="lg" bg="info">
            <Container>
                <div className='d-flex align-items-center'>
                    <Navbar.Brand href="/">
                        <img src={logo} height='40' width='40' alt="" />
                    </Navbar.Brand>
                    <Navbar.Brand className='fw-bold fs-2' href="/">Kidol</Navbar.Brand>
                </div>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="justify-content-end flex-grow-1 pe-3 fw-semibold align-items-center">
                        <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link default"} to='/'>Home</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link default"} to='/allToys'>All Toys</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link default"} to='/myToys'>My Toys</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link default"} to='/addToys'>Add A Toy</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link default"} to='/blog'>Blog</NavLink>
                        {
                            user &&


                            <OverlayTrigger
                                placement="right"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip}
                            >
                                <img src={user.photoURL} alt="" className='border border-2 rounded-circle ms-5' height="70" weight="70" />
                            </OverlayTrigger>

                        }
                        {
                            user ?
                                <>
                                    <Button onClick={handleLogOut} variant="success" className='ms-5'>Logout</Button>
                                </>
                                :
                                <Link to='/login'>
                                    <Button variant="success" className='ms-5'>Login</Button>
                                </Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;