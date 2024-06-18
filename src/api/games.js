import * as api from './api.js';

const endpoints = {
    getRecent: '/data/games?sortBy=_createdOn%20desc&distinct=category',
}

export const getRecent = async () => {
    return api.get(endpoints.getRecent);
}