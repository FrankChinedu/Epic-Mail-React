import axios from 'axios';

const saveToLocalStorage = (user) => {
  if (user) {
    const { token } = user;
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  }
};

export const axiosCall = async ({
  path, payload, method, token
}) => {
  const url = `${path}`;
  const headers = {
    'x-access-token': token || localStorage.token,
    'Content-Type': 'application/json'
  };
  const axiosdata = {
    method,
    url,
    data: payload,
    headers,
    json: true
  };
  const result = await axios(axiosdata);
  const data = result && result.data;
  return data;
};

export const formatDate = (time) => {
  let t = new Date(time);
  t = t.toLocaleString();
  return t;
};

export const clearLocalStorage = () => {
  localStorage.clear();
};

export default saveToLocalStorage;
