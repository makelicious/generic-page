import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import MainPage from './MainPage';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fafafa;
  min-height: 100%;
`;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Container>
          <Route exact path="" component={MainPage} />
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
