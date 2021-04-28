import React from 'react';
import classnames from 'classnames';
import Layout from '../../layout/Layout/Layout.js';

const NewAdvertPage = ({ className }) => {
    return (
        <div className={classnames("advertsPage", className )}>
            <Layout title={process.env.REACT_APP_TITLE}>
                <div>New Advert Page</div>
            </Layout>
        </div>
    );
};

export default NewAdvertPage;
