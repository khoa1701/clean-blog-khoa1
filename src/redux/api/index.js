import axios from 'axios';
// https://js-post-api.herokuapp.com/api/posts

const api = axios.create({
  baseURL: 'https://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1',
});

export {
  api,
};
