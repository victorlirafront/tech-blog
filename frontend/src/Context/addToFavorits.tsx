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
  }, [currentPostId]);

  useEffect(() => {
    console.log(favoritPosts);
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
