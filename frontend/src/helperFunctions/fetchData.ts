import Axios from 'axios';
import { baseUrl1, baseUrl2, baseUrl3, baseUrl4, baseUrl5 } from '@/constants/endpoints';

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
  const tryBaseUrl1 = `${baseUrl1}/api/get?page=${page}&limit=${limit}&category=${category}`;
  const tryBaseUrl2 = `${baseUrl2}/api/get?page=${page}&limit=${limit}&category=${category}`;
  const tryBaseUrl3 = `${baseUrl3}/api/get?page=${page}&limit=${limit}&category=${category}`;
  const tryBaseUrl4 = `${baseUrl4}/api/get?page=${page}&limit=${limit}&category=${category}`;
  const tryBaseUrl5 = `${baseUrl5}/api/get?page=${page}&limit=${limit}&category=${category}`;

  const data =
    (await fetchFunction(tryBaseUrl1)) ||
    (await fetchFunction(tryBaseUrl2)) ||
    (await fetchFunction(tryBaseUrl3)) ||
    (await fetchFunction(tryBaseUrl4)) ||
    (await fetchFunction(tryBaseUrl5));

  return data;
};
