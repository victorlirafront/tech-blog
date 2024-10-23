import Axios from 'axios';
import { DEV_API_URL, PROD_API_URL} from '@/constants/endpoints';

async function fetchFunction(baseUrl: string) {
  try {
    const response = await Axios.get(baseUrl);
    const results = response.data.results;

    if (results.length > 0) {
      return response.data;
    }
  } catch (error) {
    console.error(`Erro na requisição: ${error}`);
  }

  return null;
}

export const fetchData = async function (
  page: string | string[],
  limit: string,
  category: string | string[],
) {

  const API_URL = process.env.NODE_ENV === "production" ? PROD_API_URL : DEV_API_URL
  const data = await fetchFunction(`${API_URL}/api/get?page=${page}&limit=${limit}&category=${category}`)

  return data;
};
