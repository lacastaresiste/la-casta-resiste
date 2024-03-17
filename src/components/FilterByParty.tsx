import { useMediaQuery } from "react-responsive";
import { Senado, Member } from "./types";
import { capitalizeWords } from "./utils";

import {
	Button,
	ToggleButton,
	ToggleButtonGroup,
	createTheme,
} from "@mui/material";
import { useState } from "react";
import { ThemeProvider } from "@emotion/react";

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

interface IFiltersProps {
	filters: string[];
	partys: string[];
	onChange: (
		event: React.MouseEvent<HTMLElement>,
		newFormats: string[]
	) => void;
}

const darkTheme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "#F00",
			light: "#FF0000",
			dark: "#FF0000",
			contrastText: "#242105",
		},
	},
});

const Filters: React.FC<IFiltersProps> = ({ filters, partys, onChange }) => {
	// const [activeFilters, setActiveFilters] = useState(0);
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 480px)" });

	const activeFilters = filters.length - 1;

	return (
		<ThemeProvider theme={darkTheme}>
			<div className="flex flex-col items-center gap-6">
				<ToggleButtonGroup
					value={filters}
					color="primary"
					onChange={onChange}
					orientation={isTabletOrMobile ? "vertical" : "horizontal"}
					aria-label="senators filters"
				>
					{partys.map((party: string, index: number) => (
						<ToggleButton key={index} value={party} aria-label={party}>
							<span className="text-[12px] lg:text-[0.7em]">
								{capitalizeWords(party)}
							</span>
						</ToggleButton>
					))}
				</ToggleButtonGroup>
				<span className="text-[0.8em]">
					{"Filtros activos: " + activeFilters}
				</span>
			</div>
		</ThemeProvider>
	);
};

export const FilterByParty: React.FC<IFilterByPartyProps> = ({
	senado,
	filters,
	onChange,
}) => {
	const [showFilters, setShowFilters] = useState(false);

	const handleShowFilters = () => {
		setShowFilters(!showFilters);
	};

	const handleChange = (
		event: React.MouseEvent<HTMLElement>,
		newFormats: string[]
	) => {
		onChange(newFormats);
	};

	const partys: string[] = filterPartys(senado);

	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 480px)" });

	return (
		<div className="flex flex-col justify-center items-center">
			{isTabletOrMobile ? (
				<div className="flex flex-col items-center">
					<Button onClick={handleShowFilters}>
						{showFilters ? "Ocultar Filtros" : "Mostrar Filtros"}
					</Button>
					{showFilters ? (
						<div className="flex flex-col">
							<Filters
								filters={filters}
								partys={partys}
								onChange={handleChange}
							/>
						</div>
					) : null}
				</div>
			) : (
				<div className="flex flex-col items-center">
					<h2 className="mb-4">Filtrar por partido</h2>
					<Filters filters={filters} partys={partys} onChange={handleChange} />
				</div>
			)}
		</div>
	);
};
