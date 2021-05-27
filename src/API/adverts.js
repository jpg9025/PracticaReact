import client from './client';
import { formDataConversor } from '../utilities/formDataconverter.js';

const advertsBaseUrl = '/api/v1'

export const getLatestAdverts = () => {
    const url = `${advertsBaseUrl}/adverts`;
    return client.get(url);
};

export const getAdvertDetail = advertId => {
    const url = `${advertsBaseUrl}/adverts/${advertId}`;
    return client.get(url);
};

export const createAdvert = formDataConversor(advert => {
    const url = `${advertsBaseUrl}/adverts`;
    return client.post(url, advert);
});

export const getTags = () => {
    const url=`${advertsBaseUrl}/adverts/tags`;
    return client.get(url);
};

export const deleteAdvert = advertId => {
    const url = `${advertsBaseUrl}/adverts/${advertId}`;
    return client.delete(url);
};

