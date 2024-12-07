import { PROD_API_URL, DEV_API_URL } from '@/constants/endpoints';
import StyledSearchPost from './SearchPost.styled';
import { SearchPostProps } from './SearchPost.types';
import { fetchFunction } from '../../helperFunctions/fetchData'

function SearchPost({ displaySearch = false, onCloseSearch, onSearchPosts }: SearchPostProps) {
  if (!displaySearch) return null;

  const searchPosts = async function (query: string) {
    const API_URL = process.env.NODE_ENV === 'production' ? PROD_API_URL : DEV_API_URL;
    const data = await fetchFunction(`${API_URL}/api/search?query=${encodeURIComponent(query)}`);
    onSearchPosts(data)
  };

  const handleKeyDown = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    if (event.key === 'Enter') {
      const query = target.value.trim();
      if (query) {
        await searchPosts(query);
      }
      onCloseSearch();
    }
  };
  
  return (
    <StyledSearchPost>
      <div className="search-wrapper">
        <input className="search" type="search" placeholder="Pesquisar" onKeyDown={handleKeyDown} />
        <div className="search-grey-icon">
          <p>Aperte enter para buscar</p>
          <img src="/search-gray.png" alt="Ícone de busca cinza" />
        </div>
      </div>
      <div className="overlay" onClick={onCloseSearch}></div>
    </StyledSearchPost>
  );
}

export default SearchPost;
