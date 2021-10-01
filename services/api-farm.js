import axios from 'axios'

import { STATUS_JSON_URL } from 'config'

const apiAxios = axios.create({
  baseURL: STATUS_JSON_URL,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})

apiAxios.interceptors.response.use((response) => {
  return response.data;
});

const getFarmsInfo = async () => {
  return await apiAxios.get('/')
}

export {
  getFarmsInfo
};
