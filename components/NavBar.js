import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, Row, Col } from 'react-bootstrap';
import Headline from './Headline'

class NavBar extends Component {   

    constructor(props){
        super(props);  
        this.state = {
            headlines: [],
            isLoaded: false,
            error: null
        }
        
    }

    componentDidMount() {
        this.getLatestHeadlines();
        console.log(this.state.headlines)
    }

    getLatestHeadlines = () => {
        const API_KEY = 'f53d5e3b628c462b9f67aaee3af54048';
        fetch("https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=f53d5e3b628c462b9f67aaee3af54048")
            .then(res => res.json())
            .then((result) => {                
                this.setState({
                    headlines: result.articles,
                    isLoaded: true
                })
                
            },
                (error) => {
                    this.setState({
                        error: error,
                        isLoaded: true
                    })
                }
            )
    }

    getHeadline = (article, index) => {
        return(
            <Row key={index} className="md">
                <Headline article={article}></Headline>
            </Row>
        )
    }

    render() {        
        const {headlines, isLoaded, error} = this.state;
       
        console.log("hello",headlines)
        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {

            return (
                <div>
                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand href="#home">News</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Favorites</Nav.Link>
                                {/* <NavDropdown title="Category" id="basic-nav-dropdown">
                                    <NavDropdown.Item>Physics</NavDropdown.Item>
                                    <NavDropdown.Item>Chemistry</NavDropdown.Item>
                                    <NavDropdown.Item>Biology</NavDropdown.Item>
                                    <NavDropdown.Divider /> 
                                    <NavDropdown.Item>Mathematics</NavDropdown.Item>
                                </NavDropdown>  */}
                            </Nav>
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>
                    <header className="App-header">
                        <Container> 
                            <Row>
                                {this.state.headlines.map(this.getHeadline)}
                            </Row>
                        </Container>
                    </header>
                </div>
            )
        }
    }
}

export default NavBar;