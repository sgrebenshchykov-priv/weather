import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, NavItem, Nav, Grid, Row, Col } from "react-bootstrap";
import WeatherDisplay from './components/WeatherDisplay';

const PLACES = [
  {name: 'TEST CITY', zip: '94303'},
  {name: 'Sunnyvale', zip: '94088'},
  {name: 'Santa Cruz', zip: '95062'},
  {name: 'Honolulu', zip: '96803'}
]

class App extends Component {

  constructor() {
    super();
    this.state = {
      activePlace: 0
    }
  }

  render() {
    const activePlace = this.state.activePlace;
    return (
      <div>
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    React Simple Weather App
                </Navbar.Brand>
            </Navbar.Header>
        </Navbar>
        <Grid>
            <Row>
                <Col md={4} sm={4}>
                    <h3> Select a city </h3>
                    <Nav
                      bsStyle="pills"
                      stacked
                      navbar
                      activeKey={activePlace}
                      onSelect={index => {
                        this.setState({ activePlace: index })
                      }}  
                    >
                    {PLACES.map((place, index) => (
                      <NavItem key={index} eventKey={index}> {place.name} </NavItem>
                    ))}
                    </Nav>
                </Col>
                <Col md={8} sm={8}>
                  <WeatherDisplay key={activePlace} zip={PLACES[activePlace].zip} />
                </Col>
            </Row>
        </Grid>
    </div>
    );
  }
}

export default App;
