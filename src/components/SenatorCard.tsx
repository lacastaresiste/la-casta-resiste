import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YoutubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useMediaQuery } from "react-responsive";
import { capitalizeWords } from "./utils";

export interface ISenatorCardProps {
	ID: string;
	IMG_SMALL: string;
	NOMBRE: string;
	APELLIDO: string;
	PARTIDO: string;
	BLOQUE: string;
	PROVINCIA: string;
	EMAIL: string;
	ASESORES: number;
	SOCIAL_MEDIA: string[][];
}

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
	EMAIL,
	ASESORES,
	SOCIAL_MEDIA,
}) => {
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 480px)" });

	const IMAGE_256 = Images_Loc.IMG_256 + ID + ".webp";
	const IMAGE_512 = Images_Loc.IMG_512 + ID + ".webp";

	return (
		<div className="flex flex-col bg-third shadow-[1px_10px_20px_0px_rgba(0,0,0,0.2)] rounded overflow-hidden">
			<div className="border-b border-b-[#888] grid grid-rows-2 grid-cols-2">
				<img
					className="block object-cover row-start-1 row-end-3 col-start-1 col-end-3"
					src={isTabletOrMobile ? IMAGE_256 : IMAGE_512}
					decoding="async"
					alt={`Foto del senador ${NOMBRE} ${APELLIDO}`}
				/>
				<img
					className="max-w-[80px] block object-cover border-4 rounded-full border-primary row-start-2 row-end-3 col-start-1 col-end-2 self-end ml-4 mb-4"
					src={IMG_SMALL}
					alt=""
				/>
			</div>

			<div className="flex flex-col items-center mt-4 border-b-[#555] border-b w-full p-4">
				<h2 className="text-[1em] font-bold text-white text-center">
					{capitalizeWords(NOMBRE + " " + APELLIDO)}
				</h2>
			</div>

			<div className="flex flex-col items-center mt-4 border-b-[#555] border-b w-full">
				<span className="font-medium text-primary text-[1em] block">Redes</span>
				<div className="flex flex-row items-center justify-between p-4 gap-4">
					{SOCIAL_MEDIA.length === 0 ? (
						<span className="text-sm w-fit font-normal text-white">
							no disponible
						</span>
					) : (
						SOCIAL_MEDIA.map((media, index) => (
							<a
								key={index}
								href={media[1]}
								target="_blank"
								className="w-fit font-normal text-white hover:text-primary transition-colors"
							>
								{getIcons(media[0])}
							</a>
						))
					)}
				</div>
			</div>

			<div className="flex flex-col gap-2 text-white p-6">
				<div>
					<span className="font-medium text-primary text-[1em] block">
						Partido o Alianza
					</span>
					<span className="text-[0.85em]">{capitalizeWords(PARTIDO)}</span>
				</div>

				<div>
					<span className="font-medium text-primary text-[1em] block">
						Bloque
					</span>
					<span className="text-[0.85em]">{capitalizeWords(BLOQUE)}</span>
				</div>

				<div>
					<span className="font-medium text-primary text-[1em] block">
						Provincia
					</span>
					<span className="text-[0.85em]">{capitalizeWords(PROVINCIA)}</span>
				</div>

				<div>
					<span className="font-medium text-primary text-[1em] block">
						Email
					</span>
					<span className="text-[0.85em] break-all whitespace-normal">
						{EMAIL}
					</span>
				</div>

				<div>
					<span className="font-medium text-primary text-[1em] block">
						Asesores
					</span>
					<span className="text-[0.85em]">{ASESORES}</span>
				</div>
			</div>
		</div>
	);
};
