import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <div>
           
            <>
            <Navbar bg="dark" variant="dark "  fixed="top" collapseOnSelect expand="lg" >
                <Container>
                
                    <Navbar.Brand href="/home">Mental Health</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <>
                    <li className="text-decoration-none  mr-5 list-style-type-none">
                       <HashLink to="/home" className="text-decoration-none "> Home </HashLink>
                        </li> 
                        <li className="text-decoration-none  mr-5 list-style-type-none">
                        <HashLink to="/home#services" className="text-decoration-none ml-3"> Services</HashLink>
                        </li>
                        <li className="text-decoration-none  mr-5  list-style-type-none">
                        <HashLink to="/home#choose-us" className="text-decoration-none ml-3"> ChooseUs</HashLink>
                        </li>
                        
                        <li className="text-decoration-none ml-5">
                        <HashLink to="/home#contact" className="text-decoration-none"> Contact Us</HashLink>
                        </li>
                  
                    </>
                    {
                    !user.email ? <Link to="/login"><button type="button" className="btn__regular ">Login</button></Link> :
                    <div className="login__section">
                        <h5 className="ml-5"> <span className="text-white">{user.displayName}</span></h5>
                    <button type="button" onClick={logOut} className="btn__regular">LogOut</button>
                    </div>
                    }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
        </div>
    );
};

export default Header;