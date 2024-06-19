import * as api from './api.js';

const endpoints = {
    getRecent: '/data/games?sortBy=_createdOn%20desc&distinct=category',
    getAll: '/data/games?sortBy=_createdOn%20desc',
    create: '/data/games',
}

export const getRecent = async () => {
    return api.get(endpoints.getRecent);
}

export const getAll = async () => {
    return api.get(endpoints.getAll);
}

export const create = async (data) => {
    return api.post(endpoints.create, data)
}