import client from './client';


const advertsBaseUrl = '/api/v1'
//const authBaseUrl = 'api/auth'

export const getLatestAdverts = () => {
    const url = `${process.env.REACT_APP_API_BASE_URL}${advertsBaseUrl}/adverts`;
    return client.get(url);
};

/*export const getAdvertAuth = () => {
    return client.get(authBaseUrl);
};*/
