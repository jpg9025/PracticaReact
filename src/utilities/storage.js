const storage = {
    get(key) {
        const value = sessionStorage.getItem(key);
        if(!value) {
            return null;
        }
        return JSON.parse(value);
    },

    remember(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },

    set(key, value) {
        sessionStorage.setItem(key, JSON.stringify(value));
    },

    remove(key) {
        sessionStorage.removeItem(key);
    },
};

export default storage;