import * as api from './api.js';

const endpoints = {
    getAll: (gameId) => `/data/comments?where=gameId%3D%22${gameId}%22`,
    postComment: '/data/comments'
}

export const getComments = async (gameId) => {
    return await api.get(endpoints.getAll(gameId));
}

export const postNewComment = async (commentData) => {
    return api.post(endpoints.postComment, commentData)
}