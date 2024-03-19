import { createContext } from 'react';
import { MediaQueryContextType, FilterProviderProps } from './types';
import { useMediaQuery } from 'react-responsive';

export const MediaQueryContext = createContext<
  MediaQueryContextType | undefined
>(undefined);

export const MediaQueryProvider: React.FC<FilterProviderProps> = ({
  children,
}) => {
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });

  return (
    <MediaQueryContext.Provider value={{ isMobile }}>
      {children}
    </MediaQueryContext.Provider>
  );
};
