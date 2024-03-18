import { FilterByParty } from "../Filters/ByParty/FilterByParty";
import { SortByAdvisors } from "../Filters/SortByAdvisors/SortByAdvisors";

interface IMenuProps {
	filters: string[];
	setFilters: (newFormats: string[]) => void;
	sortByAdvisors: boolean;
	setSortByAdvisors: (value: boolean) => void;
}

export const Menu: React.FC<IMenuProps> = ({
	filters,
	setFilters,
	sortByAdvisors,
	setSortByAdvisors,
}) => {
	return (
		<nav className="min-w-[230px] rounded-md p-4 max-w-[600px] max-h-full box-border flex flex-col gap-4 items-center bg-navbar border border-[#555]">
			<FilterByParty
				filters={filters}
				onChange={(filter) => setFilters(filter)}
			/>
			<SortByAdvisors value={sortByAdvisors} onChange={setSortByAdvisors} />
		</nav>
	);
};
