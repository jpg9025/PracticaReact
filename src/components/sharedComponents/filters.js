export const saleFilter = {
    all: { value: 'all', label: 'All' },
    sell: { value: 'sell', label: 'Sell' },
    buy: { value: 'buy', label: 'Buy' },
};

const initialFilters = {
    name: "",
    price: 0,
    tags: [],
    sale: saleFilter.buy.value,
};

export const filterByName = async (adverts, filters) => {
    return await adverts.filter((item) => !filters.name || item.name.includes(filters.name));
};

export const filterByPrice = async (adverts, filters) => {
    return await adverts.filter((item) => !filters.price || (item.price >= Math.min(...filters.price) && item.price <= Math.max(...filters.price)));
};

export const filterByTags = async (adverts, filters) => {
    return await adverts.filter((item) => !filters.tags || (item.tags.every(tag => filters.tags.includes(tag))));
};

export const filterBySale = async (adverts, filters) => {
    return await adverts.filter((item) => {
        if(item.sale && (filters.sale === 'sell')){
            return item;
        } else if(!item.sale && (filters.sale === 'buy')){
            return item;
        } else if(filters.sale === 'all'){
            return item;
        } else {
            return undefined;
        };
    });
};

export default initialFilters;