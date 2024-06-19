import * as api from './api.js';

const endpoints = {
    getRecent: '/data/games?sortBy=_createdOn%20desc&distinct=category',
    getAll: '/data/games?sortBy=_createdOn%20desc',
    getOne: '/data/games/',
    create: '/data/games',
    edit: '/data/games/',
    remove: '/data/games/',
}

export const getRecent = async () => {
    return api.get(endpoints.getRecent);
}

export const getAll = async () => {
    return api.get(endpoints.getAll);
}

export const getOne = async (id) => {
    return api.get(endpoints.getOne + id);
}

export const create = async (data) => {
    return api.post(endpoints.create, data)
}

export const edit = async (id, data) => {
    return api.put(endpoints.edit + id, data);
}

export const remove = async (id) => {
    return api.del(endpoints.remove + id);
}
