import React from 'react';
import classnames from 'classnames';
import PTypes from 'prop-types';

import { getLatestAdverts } from '../../../API/adverts.js';
import Layout from '../../layout/Layout/Layout.js';
import AdvertsList from '../AdvertsList/AdvertsList.js';
import EmptyList from '../EmptyList/EmptyList.js';
import FilterAdverts from '../../sharedComponents/FilterAdverts.js';

const AdvertsPage = ({ className, history, ...props }) => {
    const [ adverts, setAdverts ] = React.useState([]);

    const [filters, setFilters] = React.useState();


    React.useEffect(() => {
        getLatestAdverts().then(adverts => {setAdverts(adverts)});
    }, []);

    return <div className={classnames("advertsPage", className )}>
        <Layout title={process.env.REACT_APP_TITLE} {...props}>
            <FilterAdverts 
            prices={adverts.map(({ price }) => price)}
            onFilter={setFilters}/>
            <div className={className}>
                {adverts.length ? <AdvertsList history={history} adverts={adverts}/> : <EmptyList/>}
            </div>
        </Layout>
    </div>;
};

AdvertsPage.propTypes = {
    adverts: PTypes.shape({ advert: PTypes.object })
  }

export default AdvertsPage;