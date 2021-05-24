import client from './client';


const advertsBaseUrl = '/api/v1'
//const authBaseUrl = 'api/auth'

export const getLatestAdverts = () => {
    const url = `${advertsBaseUrl}/adverts`;
    return client.get(url);
};

export const getAdvertDetail = advertId => {
    const url = `${advertsBaseUrl}/adverts/${advertId}`;
    return client.get(url);
};

export const createAdvert = advert => {
    const url = `${advertsBaseUrl}/adverts`;
    return client.post(url, advert);
};

/*export const getAdvertAuth = () => {
    return client.get(authBaseUrl);
};*/
