import { Senado, Member } from "./types";
import { capitalizeWords } from "./utils";

import { ToggleButton, ToggleButtonGroup } from "@mui/material";

function filterPartys(obj: Senado) {
	const array = obj.senators.map((party: Member) => {
		return party.PARTIDO;
	});
	return array.filter(
		(value: string, index: number) => array.indexOf(value) === index
	);
}

interface IFilterByPartyProps {
	senado: Senado;
	filters: string[];
	onChange: (newFormats: string[]) => void;
}

export const FilterByParty: React.FC<IFilterByPartyProps> = ({
	senado,
	filters,
	onChange,
}) => {
	const handleChange = (
		event: React.MouseEvent<HTMLElement>,
		newFormats: string[]
	) => {
		onChange(newFormats);
	};

	const partys: string[] = filterPartys(senado);

	return (
		<ToggleButtonGroup
			value={filters}
			onChange={handleChange}
			aria-label="text formatting"
		>
			<div className="p-4 lg:p-0 grid grid-cols-3 lg:grid-cols-7 lg:grid-rows-1">
				{partys.map((party: string, index: number) => (
					<ToggleButton key={index} value={party} aria-label={party}>
						<span className="text-[12px] lg:text-[0.7em]">
							{capitalizeWords(party)}
						</span>
					</ToggleButton>
				))}
			</div>
		</ToggleButtonGroup>
	);
};
