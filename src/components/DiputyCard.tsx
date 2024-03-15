import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YoutubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

export interface IDiputyCardProps {
	IMG: string;
	NOMBRE: string;
	APELLIDO: string;
	PARTIDO: string;
	BLOQUE: string;
	PROVINCIA: string;
	SOCIAL_MEDIA: string[][];
}

const getIcons = (name: string) => {
	if (name === "Twitter") {
		return <TwitterIcon className="max-h-[20px]" />;
	}

	if (name === "Facebook") {
		return <FacebookIcon className="max-h-[20px]" />;
	}

	if (name === "Youtube") {
		return <YoutubeIcon className="max-h-[20px]" />;
	}

	if (name === "Instagram") {
		return <InstagramIcon className="max-h-[20px]" />;
	}
};

const capitalizeWords = (sentence: string) => {
	return sentence
		.split(" ")
		.map((word) => {
			return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
		})
		.join(" ");
};

export const DiputyCard: React.FC<IDiputyCardProps> = ({
	IMG,
	NOMBRE,
	APELLIDO,
	PARTIDO,
	BLOQUE,
	PROVINCIA,
	SOCIAL_MEDIA,
}) => {
	return (
		<div className="diputy-card grid grid-rows-2 lg:grid-rows-1 2xl:grid-cols-[max_auto] bg-third rounded shadow-[1px_10px_20px_0px_rgba(0,0,0,0.2)] overflow-hidden">
			{/* name, face and socials. */}
			<div className="flex flex-col bg-secondary p-4 items-center justify-between gap-4">
				<div className="border-2 border-primary overflow-hidden rounded-full w-[120px] h-[120px] flex">
					<img
						className="max-w-full max-h-full block object-cover"
						src={IMG}
						alt=""
					/>
				</div>
				<span className="font-bold text-[0.8em] text-white text-center">
					{capitalizeWords(NOMBRE + " " + APELLIDO)}
				</span>
				<div className="flex flex-col select-none font-medium items-center">
					{/* <span className="text-[#ff335c] text-[1em]">Redes</span> */}
					<div className="flex flex-row gap-2">
						{SOCIAL_MEDIA.length === 0 ? (
							<span className="text-sm w-fit font-normal text-white">no disponible</span>
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
			</div>
			{/* details */}
			<div className="flex flex-row text-white justify-center items-center w-full">
				<div className="flex flex-col gap-2 md:grid text-white md:grid-cols-2 md:gap-8 p-4">
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
							Asesores
						</span>
						<span className="text-[0.85em]">{0}</span>
					</div>
				</div>
			</div>
		</div>
	);
};
