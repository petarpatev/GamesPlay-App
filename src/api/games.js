import * as api from './api.js';

const pageSize = 2;

const endpoints = {
    getRecent: '/data/games?sortBy=_createdOn%20desc&distinct=category',
    getAll: `/data/games?sortBy=_createdOn%20desc&pageSize=${pageSize}&offset=`,
    getOne: '/data/games/',
    create: '/data/games',
    edit: '/data/games/',
    remove: '/data/games/',
    count: '/data/games?count'
}

export const getRecent = async () => {
    return api.get(endpoints.getRecent);
}

export const getAll = async (page = 1) => {
    const [games, count] = await Promise.all([
        api.get(endpoints.getAll + (page - 1) * pageSize),
        api.get(endpoints.count)
    ]);
    return {
        games,
        pages: Math.ceil(count/pageSize)
    }
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
