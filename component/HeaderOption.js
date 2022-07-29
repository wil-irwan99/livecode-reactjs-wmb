import { Component } from "react";
import {Container, Nav, Navbar as NavbarBS, NavDropdown} from 'react-bootstrap';


class Home extends Component {
    constructor(props){
        super(props)
        }

    LogOut = () => {
        let page =  '1'
        this.props.onNavigate(page);
    }

    Home = () => {
        let page =  '2'
        this.props.onNavigate(page);
    }

    Menu = () => {
        let page =  '3'
        this.props.onNavigate(page);
    }

    Table = () => {
        let page =  '4'
        this.props.onNavigate(page);
    }


    render(){
        return (
                <NavbarBS bg='dark' variant='dark' expand='lg'>
                    <Container>
                        <NavbarBS.Toggle aria-controls="basic-navbar-nav"/>
                        <NavbarBS.Collapse id ="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link onClick={this.Home}>Home</Nav.Link>
                                <Nav.Link onClick={this.Menu}>Menu</Nav.Link>
                                <Nav.Link onClick={this.Table}>Table</Nav.Link>
                                <Nav.Link onClick={this.LogOut}>Logout</Nav.Link>
                            </Nav>
                        </NavbarBS.Collapse>
                    
                    </Container>
                </NavbarBS>
        )
    }
}

export default Home;