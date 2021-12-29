import axios from 'axios';

const instance = axios.create({
  baseUrl: process.env.REACT_APP_API_URL,
});

export const loadPostsAPI = () => {
  return instance({
    method: 'get',
    url: '/posts?page=1&size=10&kinds=&status=',
  });
};

export const loadPostAPI = id => {
  const ii= instance({
    method: 'get',
    url: `/post/${id}`,
  });
  console.log(ii);
  return ii;
};

export const likePostAPI = id => {
  return instance({
    method: 'get',
    url: `/post/${id}/like`,
  });
};
