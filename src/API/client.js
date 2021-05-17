import axios from 'axios';

const client = axios.create({ baseURL : process.env.REACT_APP_API_BASE_URL });

client.interceptors.response.use(
    response => /*console.log(response) ||*/ response.data,
    error => {
        if(!error.response) {
            return Promise.reject({ message: error.message});
        }
        return Promise.reject({
            message: error.response.statusText,
            ...error.response.data,
        });
    });

//Token management
const setAuthorizationHeader = token => {
    client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};
const removeAuthorizationHeader = token => {
    delete client.defaults.headers.common['Authorization'];
}

export const configureClient = ({ accessToken }) => {
    if (accessToken) {
        setAuthorizationHeader(accessToken);
    }
};

export const resetClient = () => {
    removeAuthorizationHeader();
}
export default client;