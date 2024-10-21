import React, {
  useState,
  createContext,
  useContext,
  ReactNode,
  MouseEvent,
  useEffect,
} from 'react';

type IAddToFavoritsProps = {
  addToFavoritsHandler: (e: MouseEvent) => void;
  favoritPosts: { post: number }[];
};

const AddToFavoritsContext = createContext<IAddToFavoritsProps | undefined>(undefined);

function fetchFavoritPosts() {
  const favoritPostsString = localStorage.getItem('lira-favorit-posts') || '';
  if (!favoritPostsString) return;
  const favoritPostsArray = JSON.parse(favoritPostsString);
  return favoritPostsArray;
}

function savePostToFavorits(favoritPosts: { post: number }[]) {
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
  const [favoritPosts, setFavoritPosts] = useState<{ post: number }[]>([
    {
      post: -1,
    },
  ]);
  const [currentPostId, setCurrentPostId] = useState<{ id: number; date: Date }>();

  useEffect(() => {
    const favoritPostsArray = fetchFavoritPosts();
    if (!favoritPostsArray) return;
    setFavoritPosts(favoritPostsArray);
  }, []);

  useEffect(() => {
    if (!currentPostId?.id) return;
    if (!favoritPosts) return;
    const alreadyFavoritedThisPost = favoritPosts.some(item => item.post === currentPostId.id);

    if (alreadyFavoritedThisPost) {
      setFavoritPosts(prevFavoritPosts =>
        prevFavoritPosts.filter(item => item.post !== currentPostId.id),
      );
    } else {
      setFavoritPosts(prevFavoritPosts => [...prevFavoritPosts, { post: currentPostId.id }]);
    }

    savePostToFavorits(favoritPosts);
  }, [currentPostId]);

  useEffect(() => {
    if (!favoritPosts) return;

    savePostToFavorits(favoritPosts);
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
    <AddToFavoritsContext.Provider value={{ addToFavoritsHandler, favoritPosts }}>
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
