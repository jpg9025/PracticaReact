import client, { configureClient, resetClient } from './client';
import storage from '../utilities/storage.js';

const authBaseUrl = '/api/auth'

export const login = credentials => {
    return client.post('/api/auth/login', credentials).then(({accessToken}) => {
        if(credentials.remember){
            storage.remember('auth', accessToken);
        };
        configureClient({ accessToken });
        storage.set('auth', accessToken);
    });
    // Component login receives the promise. At the same time, when it receive the promise, its setted with 
};

export const logout = () => {
    return Promise.resolve().then(() => {
        resetClient();
        storage.remove('auth');
    });
};

export const getAdvertAuth = () => {
    const url = `${authBaseUrl}/me`;
    return client.get(url);
};