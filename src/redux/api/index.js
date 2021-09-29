import axios from 'axios';
// https://js-post-api.herokuapp.com/api/posts

const api = axios.create({
  baseURL: 'https://js-post-api.herokuapp.com/api/posts?',
});

export {
  api,
};
