import React, {
  useState,
  createContext,
  useContext,
  ReactNode,
  MouseEvent,
  useEffect,
} from 'react';

interface IAddToFavoritsProps {
  addToFavoritsHandler: (e: MouseEvent) => void;
}

const AddToFavoritsContext = createContext<IAddToFavoritsProps | undefined>(undefined);

function savePostToFavorites(favoritPosts: any) {
  if (Array.isArray(favoritPosts)) {
    try {
      const arrayEmString = JSON.stringify(favoritPosts);
      localStorage.setItem('lira-favorit-posts', arrayEmString);
    } catch (error) {
      console.error('Erro ao salvar posts favoritos no localStorage:', error);
    }
  } else {
    console.error('O parâmetro fornecido não é um array.');
  }
}

export const AddToFavoritsProvider = ({ children }: { children: ReactNode }) => {
  const [favoritPosts, setFavoritPosts] = useState<{ post: number }[]>([]);
  const [currentPostId, setCurrentPostId] = useState<{ id: number; date: any }>();

  useEffect(() => {
    if (!currentPostId?.id) return;

    const alreadyFavoritedThisPost = favoritPosts.some(item => item.post === currentPostId.id);

    if (alreadyFavoritedThisPost) {
      setFavoritPosts(prevFavoritPosts =>
        prevFavoritPosts.filter(item => item.post !== currentPostId.id),
      );
    } else {
      setFavoritPosts(prevFavoritPosts => [...prevFavoritPosts, { post: currentPostId.id }]);
    }

    savePostToFavorites(favoritPosts);
  }, [currentPostId]);

  useEffect(() => {
    if(favoritPosts.length <= 0)return //FIX
    savePostToFavorites(favoritPosts);
  }, [favoritPosts]);

  const addToFavoritsHandler = (e: MouseEvent) => {
    const closestElement = (e.currentTarget as HTMLElement).closest('[data-id]');

    if (closestElement && closestElement instanceof HTMLElement) {
      const currentPostId = Number(closestElement.dataset.id);

      setCurrentPostId({ id: currentPostId, date: new Date() });
    } else {
      console.log('Elemento com data-id não encontrado ou não é um HTMLElement.');
    }
  };

  return (
    <AddToFavoritsContext.Provider value={{ addToFavoritsHandler }}>
      {children}
    </AddToFavoritsContext.Provider>
  );
};

export const useAddToFavoritsContext = () => {
  const context = useContext(AddToFavoritsContext);
  if (context === undefined) {
    throw new Error('useAddToFavoritsContext must be used within an AddToFavoritsProvider');
  }
  return context;
};
