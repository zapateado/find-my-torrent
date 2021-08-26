import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Feedback from './components/Feedback';
import SearchCard from './components/SearchCard';
import Torrents from './components/Torrents';

const Wrapper = styled(Container)`
    margin-top: 70px;
`;

const App = () => {
  return (
    <Router>
      <Header />
        <Switch>
          <Route path="/about">
            <Wrapper>
              <About />
            </Wrapper>
          </Route>

          <Route path="/feedback">
            <Wrapper>
              <Feedback />
            </Wrapper>
          </Route>

          <Route exact path="/">
            <Wrapper>
              <SearchCard />
            </Wrapper>
          </Route>

          <Route path="/search">
            <Wrapper>
              <Torrents />
            </Wrapper>
          </Route>

        </Switch>
      <Footer />
    </Router>
  );
}

export default App;
