// api.js
import axios from 'axios';

const BASE_URL = 'http://demo0467205.mockable.io';

export const registerUserApi = async (userData) => {

  try {

    const response = await axios.post(`${BASE_URL}/users`, userData);

    return response.data;
  } catch (error) {
    throw error;
  }
};
