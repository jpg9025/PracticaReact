import React from 'react';
import PTypes from 'prop-types';
import Header from '../Header/Header.js';

import './Layout.css';

function Layout({ children, title, ...props }) {
    return (
        <div className="layout">
            <Header className="layout-header" {...props} ></Header>
            <main className="layout-main">
                <h2 className="layout-title">{title}</h2>
                <div className="layout-content">{children}</div>
            </main>
            <footer className="layout-footer">{process.env.REACT_APP_TITLE_LONG}</footer>
        </div>
    )
};

Layout.PTypes = {
    title: PTypes.string,
    children: PTypes.object.isRequired
}

Layout.defaultProps = {
    title: 'ReactPOP'
}

export default Layout;