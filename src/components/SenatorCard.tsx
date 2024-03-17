import { useMediaQuery } from "react-responsive";
import { CardHeader, Avatar, CardMedia } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YoutubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import { capitalizeWords } from "./utils";

const getIcons = (name: string) => {
	if (name === "Twitter") {
		return <TwitterIcon className="max-h-[48px]" />;
	}

	if (name === "Facebook") {
		return <FacebookIcon className="max-h-[48px]" />;
	}

	if (name === "Youtube") {
		return <YoutubeIcon className="max-h-[48px]" />;
	}

	if (name === "Instagram") {
		return <InstagramIcon className="max-h-[48px]" />;
	}
};

export interface ISenatorCardProps {
	ID: string;
	IMG_SMALL: string;
	NOMBRE: string;
	APELLIDO: string;
	PARTIDO: string;
	BLOQUE: string;
	PROVINCIA: string;
	ASESORES: number;
	SOCIAL_MEDIA: string[][];
}

const Images_Loc = {
	IMG_512: "/some-project/faces_512/",
	IMG_256: "/some-project/faces_256/",
};

export const SenatorCard: React.FC<ISenatorCardProps> = ({
	ID,
	IMG_SMALL,
	NOMBRE,
	APELLIDO,
	PARTIDO,
	BLOQUE,
	PROVINCIA,
	ASESORES,
	SOCIAL_MEDIA,
}) => {
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 480px)" });

	const IMAGE_256 = Images_Loc.IMG_256 + ID + ".webp";
	const IMAGE_512 = Images_Loc.IMG_512 + ID + ".webp";

	return (
		<div className="rounded-md shadow-lg flex flex-col overflow-hidden">
			<CardHeader
				avatar={
					<Avatar aria-label="senator">
						<img src={IMG_SMALL} alt="" />
					</Avatar>
				}
				title={NOMBRE + " " + APELLIDO}
				subheader={PARTIDO}
				className="bg-[#202020] "
			/>

			<div className="grid grid-rows-2 grid-cols-2 h-full rounded-md">
				<div className="row-start-1 row-end-3 col-start-1 col-end-3 rounded-b-2xl overflow-hidden">
					<img
						className="w-full h-full object-cover"
						src={isTabletOrMobile ? IMAGE_256 : IMAGE_512}
						alt={NOMBRE}
					/>
				</div>
				<div className="flex rounded-md flex-col-reverse gap-2 col-start-1 col-end-3 row-start-1 row-end-3 p-4 bg-gradient-to-b from-[#0000001e] to-[#000000]">
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
						<a target="_blank" key={index} href={social[1]}>
							{getIcons(social[0])}
						</a>
					))}
				</div>
			</div>
		</div>
	);
};
