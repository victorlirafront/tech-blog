import StyledSearchPost from "./SearchPost.styled";
import { SearchPostProps } from "./SearchPost.types";

function SearchPost({ displaySearch = false, onCloseSearch }: SearchPostProps) {
  if (!displaySearch) return null;

  return (
    <StyledSearchPost>
      <div className="search-wrapper">
        <input className="search" type="search" placeholder="Pesquisar" />
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
