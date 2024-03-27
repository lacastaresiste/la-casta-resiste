import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YoutubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import { capitalizeWords } from '../../utils/utils';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { ISenatorCardProps } from './types';
import { useImage } from '../../hooks/useImage';
import * as Avatar from '@radix-ui/react-avatar';

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

export const SenatorCard: React.FC<ISenatorCardProps> = ({
  id,
  name,
  surname,
  party: PARTIDO,
  block: BLOQUE,
  province: PROVINCIA,
  asesors: ASESORES,
  social_media: SOCIAL_MEDIA,
}) => {
  const { big, small } = useImage(id);

  return (
    <div
      className={`rounded-md shadow-lg flex flex-col overflow-hidden border border-slate6`}
    >
      <div className="border-b border-slate6 text-slate-11 p-4 flex flex-row gap-4">
        <Avatar.Root className="bg-blackA1 inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
          <Avatar.Image
            className="h-full w-full rounded-[inherit] object-cover"
            src={small}
            alt="Colm Tuite"
          />
          <Avatar.Fallback
            className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
            delayMs={600}
          >
            {name}
          </Avatar.Fallback>
        </Avatar.Root>
        <div>
          <p className="font-medium text-slate12">{name + ' ' + surname}</p>
          <p className="text-slate11">{PARTIDO}</p>
        </div>
      </div>

      <LazyLoadImage
        className="w-full max-h-[350px] object-cover border-b border-slate6"
        src={big}
        alt={name}
      />

      <div className="flex flex-row justify-between">
        <div className="flex rounded-md flex-col-reverse gap-2 col-start-1 col-end-3 row-start-1 row-end-3 p-4">
          <div className="flex flex-col leading-5 gap-1">
            <span className="text-slate12 drop-shadow-md">Bloque:</span>
            <span className="text-slate11 drop-shadow-md">
              {capitalizeWords(BLOQUE)}
            </span>
          </div>

          <div className="flex flex-col leading-5 gap-1">
            <span className="text-slate12 drop-shadow-md">Provincia:</span>
            <span className="text-slate11 drop-shadow-md">
              {capitalizeWords(PROVINCIA)}
            </span>
          </div>
          <div className="flex flex-col leading-5 gap-1">
            <span className="text-slate12 drop-shadow-md">Asesores:</span>
            <span className="text-slate11 drop-shadow-md">{ASESORES}</span>
          </div>
        </div>
        <div className="flex flex-col justify-start pb-4 pr-4">
          {/* <button className="bg-slate3 p-1 rounded border border-slate6 hover:bg-slate5 text-slate12">
            Ver Detalles
          </button> */}
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
    </div>
  );
};
