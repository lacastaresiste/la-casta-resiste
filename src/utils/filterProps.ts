export type AdvisorOrderType = 'ascending' | 'descending';

export interface Senator {
    id: string;
    party: string;
    surname: string;
    name: string;
    province: string;
    block: string;
    big_img: string;
    small_img: string;
    social_media: string[][];
    asesors: number;
    vote: boolean;
}

export interface Senate {
    senators: Senator[];
}