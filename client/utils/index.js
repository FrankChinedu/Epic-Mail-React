import axios from 'axios';

const saveToLocalStorage = (user) => {
  if (user) {
    const { token } = user;
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  }
};

export const axiosCall = async ({
  path, payload, method, contentType
}) => {
  const url = `${path}`;
  const headers = {
    'x-access-token': localStorage.token,
    'Content-Type': contentType || 'application/json'
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

export default saveToLocalStorage;
