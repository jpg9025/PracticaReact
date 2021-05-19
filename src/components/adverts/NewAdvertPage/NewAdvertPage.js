import React from 'react';
import classnames from 'classnames';
import Layout from '../../layout/Layout/Layout.js';

const NewAdvertPage = ({className, ...props}) => {
    return (
        <div className={classnames("advertsPage", className )}>
            <Layout title={process.env.REACT_APP_TITLE} {...props} >
                <div>New Advert Page MANOLAAAAAA</div>
            </Layout>
        </div>
    );
};

export default NewAdvertPage;

