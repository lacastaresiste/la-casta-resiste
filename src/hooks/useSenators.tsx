import Senate from '../assets/senado.json';

export const useSenators = () => {
  return Senate.senators.map((senator) => ({
    id: senator.ID,
    name: senator.NOMBRE,
    surname: senator.APELLIDO,
    party: senator.PARTIDO,
    block: senator.BLOQUE,
    small_img: senator.IMG_SMALL,
    big_img: senator.IMG,
    province: senator.PROVINCIA,
    asesors: senator.ASESORES,
    social_media: senator.SOCIAL_MEDIA,
    vote: senator.NEGATIVE,
  }));
};
