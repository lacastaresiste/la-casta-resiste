export interface Member {
    ID: string;
    BLOQUE: string;
    APELLIDO: string;
    NOMBRE: string;
    PROVINCIA: string;
    PARTIDO: string;
    IMG: string;
    IMG_SMALL: string;
    SOCIAL_MEDIA: string[][];
    ASESORES: number;
    NEGATIVE: boolean;
}

export interface Senado {
    senators: Member[];
}