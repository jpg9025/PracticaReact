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

export default initialFilters;