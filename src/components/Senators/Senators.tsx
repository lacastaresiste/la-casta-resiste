import Senate from "../../assets/senado.json";
import { SenatorCard } from "../Cards/SenatorCard";

interface ISenatorsProps {
	filters: string[];
	sortByAdvisors: boolean;
}

export const Senators: React.FC<ISenatorsProps> = ({
	filters,
	sortByAdvisors,
}) => {
	const SortedSenatorsByAdvisors = sortByAdvisors
		? Senate.senators.sort((a, b) => b.ASESORES - a.ASESORES)
		: Senate.senators.sort((a, b) => a.ASESORES - b.ASESORES);

	const filteredSenators = SortedSenatorsByAdvisors.filter((senator) =>
		filters.some((filter) => senator.PARTIDO.includes(filter))
	);

	const Senators =
		filteredSenators.length > 0 ? filteredSenators : Senate.senators;

	return (
		<>
			{Senators.map((senator, index) => (
				<SenatorCard
					key={index}
					ID={senator.ID}
					NOMBRE={senator.NOMBRE}
					APELLIDO={senator.APELLIDO}
					PARTIDO={senator.PARTIDO}
					BLOQUE={senator.BLOQUE}
					PROVINCIA={senator.PROVINCIA}
					ASESORES={senator.ASESORES}
					SOCIAL_MEDIA={senator.SOCIAL_MEDIA}
				/>
			))}
		</>
	);
};
