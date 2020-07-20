import React from 'react';
import { Link } from 'react-router-dom';

import GoogleAuth from './GoogleAuth';

import 'antd/dist/antd.css';
import './App.css';
import { Layout, Menu } from 'antd';

const { Header, Content } = Layout;


const Navbar = () => {
    return (
        <Layout className="layout">
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <div className="logo" >
                    <Link to="/" className="item">STREAMER</Link>
                </div>
                <div className="auth">
                    <GoogleAuth />
                </div>
            </Header>
        </Layout>
    );
};

export default Navbar;
