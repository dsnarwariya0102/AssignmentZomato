import axios from 'axios';

export const getDataAxios = async url => {
  try {
    const response = await axios.get(url);
    if (response?.status == 200) {
      return response.data;
    } else {
      return response?.status;
    }
  } catch (e) {
    console.error('Erro:=', e);
  }
};
