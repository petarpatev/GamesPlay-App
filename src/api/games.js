import * as api from './api.js';

const endpoints = {
    getRecent: '/data/games?sortBy=_createdOn%20desc&distinct=category',
    getAll: '/data/games?sortBy=_createdOn%20desc',
}

export const getRecent = async () => {
    return api.get(endpoints.getRecent);
}

export const getAll = async () => {
    return api.get(endpoints.getAll);
}