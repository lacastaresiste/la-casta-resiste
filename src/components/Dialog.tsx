
import { Button } from "@mui/material";

interface ISenatorDialogProps {
	BLOQUE: string;
	PROVINCIA: string;
	EMAIL: string;
	ASESORES: number;
	SOCIAL_MEDIA: string[][];
	onClose: ()=>void
}


export const SenatorDialog: React.FC<ISenatorDialogProps> = ({
	BLOQUE,
	PROVINCIA,
	EMAIL,
	ASESORES,
	SOCIAL_MEDIA,
	onClose
}) => {
	return (
		<div className="w-full min-h-[100vh] flex flex-row items-center justify-center bg-[#000000b6] z-50 absolute left-0 top-0">
			<div className="w-fit h-fit z-[100] bg-[#202020] p-8 gap-4 flex flex-col rounded shadow-md">
				<div className="flex flex-col">
					<span className="text-primary">Bloque</span>
					<span className="text-white">{BLOQUE}</span>
				</div>

				<div className="flex flex-col">
					<span className="text-primary">Provincia</span>
					<span className="text-white">{PROVINCIA}</span>
				</div>

				<div className="flex flex-col">
					<span className="text-primary">Email</span>
					<span className="text-white break-words whitespace-normal">
						{EMAIL}
					</span>
				</div>

				<div className="flex flex-col">
					<span className="text-primary">Cantidad de asesores</span>
					<span className="text-white">{ASESORES}</span>
				</div>

				<div className="flex flex-col">
					<span className="text-primary">Redes sociales</span>
					<div>
						{SOCIAL_MEDIA.map((social: string[], index: number) => (
							<a key={index} href={social[1]}>
								{getIcons(social[0])}
							</a>
						))}
					</div>
				</div>
				<Button size="small" onClick={onClose}>Cerrar</Button>
			</div>
		</div>
	);
};
