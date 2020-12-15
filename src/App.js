import React from 'react';
import Header from './components/Header';
import Footer from "./components/Footer"
import './i18n'
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './pages/Contact';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
    return (
        <div className="app">
            <Header />
            <BrowserRouter>
                <Switch>
                    <Route path="/javabin" />
                    <Route path="/regioner" />
                    <Route path="/styret" />
                    <Route path="/kontakt-oss">
                        <Contact />
                    </Route>
                </Switch>
            </BrowserRouter>
            <Footer/>
        </div>
    );
}

export default App;
