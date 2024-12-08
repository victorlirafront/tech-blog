
import router from 'next/router';
import Image from 'next/image';
import StyledSearchPost from './SearchPost.styled';
import { SearchPostProps } from './SearchPost.types';

function SearchPost({
  displaySearch = false,
  onCloseSearch,
  onCloseMobileMenu,
}: SearchPostProps) {

  if (!displaySearch) return null;


  const handleKeyDown = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    if (event.key === 'Enter') {
      const query = target.value.trim();
      if (query) {
        await router.push(`/?query=${encodeURIComponent(query)}`);
      }
      onCloseSearch();
    }
  };

  const handleIconClick = async () => {
    const inputElement = document.querySelector('.search') as HTMLInputElement;
    const query = inputElement?.value.trim();
    if (query) {
      await router.push(`/?query=${encodeURIComponent(query)}`);
    }
    onCloseMobileMenu();
    onCloseSearch();
  };

  return (
    <StyledSearchPost>
      <div className="search-wrapper">
        <input
          className="search"
          type="search"
          placeholder="Pesquisar"
          onKeyDown={handleKeyDown}
        />
        <div className="search-grey-icon">
          <p>Aperte enter para buscar</p>
          <Image
            src="/search-gray.png"
            alt="Ícone de busca cinza"
            onClick={handleIconClick}
            width={30}
            height={30}
          />
        </div>
      </div>
      <div className="overlay" onClick={onCloseSearch}></div>
    </StyledSearchPost>
  );
}

export default SearchPost;
