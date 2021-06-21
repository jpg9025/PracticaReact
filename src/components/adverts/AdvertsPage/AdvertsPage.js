import React from 'react';
import classnames from 'classnames';
import PTypes from 'prop-types';

import { getLatestAdverts } from '../../../API/adverts.js';
import Layout from '../../layout/Layout/Layout.js';
import AdvertsList from '../AdvertsList/AdvertsList.js';
import EmptyList from '../EmptyList/EmptyList.js';
import SecondFilterAdverts from '../../sharedComponents/SecondFilterAdverts.js';
import initialFilters from '../../sharedComponents/filters.js';

const AdvertsPage = ({ className, history, ...props }) => {

    const [ adverts, setAdverts ] = React.useState([]);

    const [filters, setFilters] = React.useState(initialFilters.name);

    React.useEffect(() => {
        getLatestAdverts().then(adverts => {setAdverts(adverts)});
    }, []);

    const handleFilter = (filters) => {
        setFilters(filters);
    };

    const filteredAdverts =  adverts.filter((item) => !filters.name || item.name === filters.name);

    console.log(filteredAdverts,'filteredAdverts')
    console.log(filters,'filters')
    console.log(adverts,'adverts')

    return <div className={classnames("advertsPage", className )}>
        <Layout title={process.env.REACT_APP_TITLE} {...props}>
            <SecondFilterAdverts adverts={adverts} onFilter={handleFilter} history={history} {...props}/>
            {/*<div className={className}>
                {adverts.length ? <AdvertsList history={history} adverts={filters ? (adverts.filter((item) => !filters.name || item.includes(filters.name))) : adverts}/> : <EmptyList/>}
            </div>*/}
            <AdvertsList adverts={filteredAdverts} history={history}/>
        </Layout>
    </div>;
};

AdvertsPage.propTypes = {
    adverts: PTypes.shape({ advert: PTypes.object })
  }

export default AdvertsPage;