import React, { Component } from "react";
import './App.css';
import Header from './components/Header';
import { Col, Container, Row } from './components/Grid';
import UserTable from './components/UserTable';
import users from "./users.json";
import UserRow from './components/UserRow';

class App extends Component {
  state = {
    users
  };

  render() {
    return (
      <>
        <Header />
        <Container>
          <Row>
            <Col size="12">
              <UserTable>
              {this.state.users.map(user => (
                <UserRow 
                  id={user.id}
                  name={user.name}
                  department={user.department}
                  position={user.position}
                />
              ))}
              </UserTable>

            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
