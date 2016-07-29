import React, { Component } from 'react';
import logo from '../../static/images/logo.svg';
import './header.css';

class Header extends Component {
    render() {
        return (
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to React</h2>
            </div>
        );
    }
}

export default Header;
