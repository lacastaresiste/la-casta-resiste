import { AdvisorOrderType } from "../utils/filterProps";

export interface Filters {
    parties: string[];
    byAdvisorsOrder: AdvisorOrderType;
}
