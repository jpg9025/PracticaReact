import React from 'react';
import classnames from 'classnames';
import Layout from '../../layout/Layout/Layout.js';

const AdvertDetailPage = ({ className }) => {
    return (
        <div className={classnames("advertsPage", className )}>
            <Layout title={process.env.REACT_APP_TITLE}>
                <div>Advert Detail Page is being builded</div>
            </Layout>
        </div>
    );
};

export default AdvertDetailPage;