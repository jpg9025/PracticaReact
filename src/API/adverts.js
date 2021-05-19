import client from './client';


const advertsBaseUrl = '/api/v1'
//const authBaseUrl = 'api/auth'

export const getLatestAdverts = () => {
    const url = `${advertsBaseUrl}/adverts`;
    return client.get(url);
};

/*export const getAdvertAuth = () => {
    return client.get(authBaseUrl);
};*/
