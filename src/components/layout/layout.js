import React, { Component } from 'react';
import './layout.css';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';

class Layout extends Component {

    render() {

        return (
            <div className="App">
                <Header />
                <Sidebar />
            </div>
        );
    }
}

export default Layout;
