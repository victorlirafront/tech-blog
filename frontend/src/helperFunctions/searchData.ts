import { PROD_API_URL, DEV_API_URL } from "@/constants/endpoints";
import { fetchFunction } from "./fetchData";

const searchPosts = async (query: string) => {
  const API_URL = process.env.NODE_ENV === "production" ? PROD_API_URL : DEV_API_URL;

  try {
    const data = await fetchFunction(`${API_URL}/api/search?query=${encodeURIComponent(query)}`);
    
    return data;
  } catch (error) {
    console.error("Erro ao buscar posts:", error);
    throw new Error("Não foi possível buscar os posts. Tente novamente mais tarde."); // Lança o erro para ser tratado por quem chamou
  }
};

export default searchPosts;
