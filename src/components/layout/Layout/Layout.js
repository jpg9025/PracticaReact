import React from 'react';

import Header from '../Header/Header.js';

import './Layout.css';

function Layout({ children, title, ...props }) {
    return (
        <div className="layout">
            <Header className="layout-header" {...props}></Header>
            <main className="layout-main">
                <h2 className="layout-title">{title}</h2>
                <section className="layout-content">{children}</section>
            </main>
            <footer className="layout-footer">{process.env.REACT_APP_TITLE_LONG}</footer>
        </div>
    )
};

export default Layout;