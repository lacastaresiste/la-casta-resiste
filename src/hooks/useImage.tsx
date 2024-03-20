import { useMediaQueriesContext } from '../context/useMediaQueriesContext';

const Images_Loc = {
  IMG_512: '/inicio/faces_512/',
  IMG_256: '/inicio/faces_256/',
  IMG_SMALL: '/inicio/faces-small/',
};

export const useImage = (id: string) => {
  const { isMobile } = useMediaQueriesContext();

  const IMAGE_256 = Images_Loc.IMG_256 + id + '.webp';
  const IMAGE_512 = Images_Loc.IMG_512 + id + '.webp';
  const SMALL = Images_Loc.IMG_SMALL + id + '.gif';

  return { big: isMobile ? IMAGE_256 : IMAGE_512, small: SMALL };
};
