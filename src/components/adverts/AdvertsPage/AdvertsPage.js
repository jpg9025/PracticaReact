import React from 'react';
import classnames from 'classnames';
import PTypes from 'prop-types';

import { getLatestAdverts } from '../../../API/adverts.js';
import Layout from '../../layout/Layout/Layout.js';
import AdvertsList from '../AdvertsList/AdvertsList.js';
import SecondFilterAdverts from '../../sharedComponents/SecondFilterAdverts.js';
import initialFilters from '../../sharedComponents/filters.js';
//import { filterByName, filterByPrice, filterBySale, filterByTags } from '../../sharedComponents/filters.js';

const AdvertsPage = ({ className, history, ...props }) => {

    const [ adverts, setAdverts ] = React.useState([]);

    const [filters, setFilters] = React.useState(initialFilters);

    React.useEffect(() => {
        getLatestAdverts().then(adverts => {setAdverts(adverts)});
    }, []);

    const handleFilter = (filters) => {
        setFilters(filters);
    };

    //const filteredAdverts = filterByTags(filterByPrice(filterByName(filterBySale(adverts,filters))));
    //He intentado dividirlo en funciones individuales, pero me ha comenzado a dar problemas con AdvertsList. etc.

    const filteredAdverts =  adverts.filter((item) => !filters.name || item.name.includes(filters.name))
    .filter((item) => !filters.price || (item.price >= Math.min(...filters.price) && item.price <= Math.max(...filters.price)))
    .filter((item) => !filters.tags || (item.tags.every(tag => filters.tags.includes(tag))))
    .filter((item) => (item.sale && filters.sale === 'sell') ? item : ((!item.sale && (filters.sale === 'buy') ? item : ((filters.sale === 'all') ? item : undefined))));

    return <div className={classnames("advertsPage", className )}>
        <Layout title={process.env.REACT_APP_TITLE} {...props}>
            <SecondFilterAdverts adverts={adverts} onFilter={handleFilter} {...props}/>
            <AdvertsList adverts={filteredAdverts} history={history}/>
        </Layout>
    </div>;
};

AdvertsPage.propTypes = {
    adverts: PTypes.shape({ advert: PTypes.object })
  }

export default AdvertsPage;