import { useMediaQuery } from 'react-responsive';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YoutubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import { capitalizeWords } from '../../utils/utils';
import { Avatar, CardHeader, useTheme } from '@mui/material';

const getIcons = (name: string) => {
  if (name === 'Twitter') {
    return <TwitterIcon className="max-h-[48px]" />;
  }

  if (name === 'Facebook') {
    return <FacebookIcon className="max-h-[48px]" />;
  }

  if (name === 'Youtube') {
    return <YoutubeIcon className="max-h-[48px]" />;
  }

  if (name === 'Instagram') {
    return <InstagramIcon className="max-h-[48px]" />;
  }
};

export interface ISenatorCardProps {
  ID: string;
  NOMBRE: string;
  APELLIDO: string;
  PARTIDO: string;
  BLOQUE: string;
  PROVINCIA: string;
  ASESORES: number;
  SOCIAL_MEDIA: string[][];
}

const Images_Loc = {
  IMG_512: '/inicio/faces_512/',
  IMG_256: '/inicio/faces_256/',
  IMG_SMALL: '/inicio/faces-small/',
};

export const SenatorCard: React.FC<ISenatorCardProps> = ({
  ID,
  NOMBRE,
  APELLIDO,
  PARTIDO,
  BLOQUE,
  PROVINCIA,
  ASESORES,
  SOCIAL_MEDIA,
}) => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 480px)' });

  const { palette } = useTheme();
  const isLight = palette.mode === 'light' ? true : false;

  const borderColorScheme = `${isLight ? 'border-light-border' : 'border-dark-border'}`;
  const gradientColorScheme = `${isLight ? 'bg-gradient-to-b from-[#0000001e] to-[#5050509F]' : 'bg-gradient-to-b from-[#0000001e] to-[#000000]'}`;

  const IMAGE_256 = Images_Loc.IMG_256 + ID + '.webp';
  const IMAGE_512 = Images_Loc.IMG_512 + ID + '.webp';

  return (
    <div
      className={`rounded-md shadow-lg flex flex-col overflow-hidden border ${borderColorScheme}`}
    >
      <CardHeader
        avatar={
          <Avatar
            aria-label="senator avatar"
            src={Images_Loc.IMG_SMALL + ID + '.gif'}
            alt={NOMBRE + ' ' + APELLIDO}
          ></Avatar>
        }
        title={<p>{NOMBRE + ' ' + APELLIDO}</p>}
        subheader={<p>{PARTIDO}</p>}
        className={`${isLight ? `bg-card-header-light border-b ${borderColorScheme}` : `bg-card-header border-b ${borderColorScheme}`}`}
      />

      <div className="grid grid-rows-2 grid-cols-2 h-full rounded-md">
        <div className="row-start-1 row-end-3 col-start-1 col-end-3 rounded-b-2xl overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={isTabletOrMobile ? IMAGE_256 : IMAGE_512}
            alt={NOMBRE}
          />
        </div>
        <div
          className={`flex rounded-md flex-col-reverse gap-2 col-start-1 col-end-3 row-start-1 row-end-3 p-4 ${gradientColorScheme}`}
        >
          <div className="flex flex-col">
            <span className="text-primary drop-shadow-md font-bold">
              Bloque
            </span>
            <span className="text-white drop-shadow-md">
              {capitalizeWords(BLOQUE)}
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-primary drop-shadow-md font-bold">
              Provincia
            </span>
            <span className="text-white drop-shadow-md">
              {capitalizeWords(PROVINCIA)}
            </span>
          </div>
          <div className="flex flex-col z-50">
            <span className="text-primary drop-shadow-md font-bold">
              Asesores
            </span>
            <span className="text-white drop-shadow-md">{ASESORES}</span>
          </div>
        </div>
        <div className="z-50 flex flex-col p-4 gap-4 items-end justify-end col-start-2 col-end-3 row-start-2 row-end-3">
          {SOCIAL_MEDIA.map((social: string[], index: number) => (
            <a
              className="text-white hover:text-red-500 transition-colors"
              target="_blank"
              key={index}
              href={social[1]}
            >
              {getIcons(social[0])}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
