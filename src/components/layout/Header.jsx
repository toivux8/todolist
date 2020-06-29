import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Header extends Component {
    render() {
        return (
            <header style={headerStyle} >
                <h1>TodoList</h1>
                <Link style={linkStyle} to="/" >Home</Link> | <Link style={linkStyle} to="/about" >About</Link> | <Link style={linkStyle} to="/contact">Contact</Link>
            </header>
        )
    }
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    textDecoration: 'none'
}

export default Header
