import { AdvisorOrderType } from "../../../utils/filterProps";

export interface ISortByAdvisorsProps {
	value: AdvisorOrderType;
	onChange: (value: AdvisorOrderType) => void;
}
