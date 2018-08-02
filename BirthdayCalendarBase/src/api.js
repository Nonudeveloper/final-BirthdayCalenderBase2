import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);


const API_ROOT = 'http://localhost:3004';


const handleErrors = err => {
  if (err && err.response && err.response.status === 401) {
  }
  return err;
};

const responseBody = res => res.body;


const requests = {
  del: url =>
    superagent
      .del(`${API_ROOT}${url}`)
      .end(handleErrors)
      .then(responseBody),
  get: url =>
    superagent
      .get(`${API_ROOT}${url}`)
      .then(responseBody),
  put: (url, body) =>
    superagent
      .put(`${API_ROOT}${url}`, body)
      .end(handleErrors)
      .then(responseBody),
  post: (url, body) =>
    superagent
      .post(`${API_ROOT}${url}`, body)
      .end(handleErrors)
      .then(responseBody),
};


const birthday = {
    get: () =>
      requests.get('/persons'),
    put: (user) =>
      requests.put(`/persons/${user.id}`, user),
    post: (user) =>
      requests.post('/persons', user),
    del: (userId) =>
      requests.del(`/persons/${userId}`),
  };

export default {
  birthday,
};