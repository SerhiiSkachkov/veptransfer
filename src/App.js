import React, { Component } from 'react';
import Header from "./Header/Header";
import Poster from "./Main/Poster/Poster";
import Services from "./Main/Services/Services";
import Request from "./Main/Request/Request";
import Parking from "./Main/Parking/Parking";
import Transfer from "./Main/Transfer/Transfer";
import Footer from "./Footer/Footer";
import './App.css';

class App extends Component {

    render() {

        return (
            <div className="App-root">
                <Header/>
                <main className="App-content">
                    <Poster/>
                    <Services/>
                    <Request/>
                    <Parking/>
                    <Transfer/>
                </main>
                <Footer/>
            </div>
        );
    }
}

export default App;
