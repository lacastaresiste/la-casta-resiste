import Senate from "../assets/senado.json";
import { SenatorCard } from "./SenatorCard";

interface ISenatorsProps {
	filters: string[];
}

export const Senators: React.FC<ISenatorsProps> = ({ filters }) => {

	const filteredSenators = Senate.senators.filter(senator => filters.some(filter => senator.PARTIDO.includes(filter)));

	const Senators = filteredSenators.length > 0 ? filteredSenators : Senate.senators;

	console.log(Senators);

	return (
		<>
			{Senators.map((senator) => (
				<SenatorCard
					key={senator.ID}
					ID={senator.ID}
					IMG_SMALL={senator.IMG_SMALL}
					NOMBRE={senator.NOMBRE}
					APELLIDO={senator.APELLIDO}
					PARTIDO={senator.PARTIDO}
					BLOQUE={senator.BLOQUE}
					PROVINCIA={senator.PROVINCIA}
					EMAIL={senator.EMAIL}
					ASESORES={senator.ASESORES}
					SOCIAL_MEDIA={senator.SOCIAL_MEDIA}
				/>
			))}
		</>
	);
};
