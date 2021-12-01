import React from "react";
import styled from "styled-components";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/header";
import Home from "./containers/home";
import About from "./containers/about";
import Products from "./containers/products";
import Contact from "./containers/contact";

const Wrapper = styled.div`
    margin-top: 80px;
`;

function App() {
    return (
        <Router>
            <Header />
            <Wrapper>
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/products">
                        <Products />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>

                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Wrapper>
        </Router>
    );
}

export default App;
