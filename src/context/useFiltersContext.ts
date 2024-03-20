import { useContext } from "react";
import { FiltersContext } from "./FilterSenatorsContext";

export const useFiltersContext = () => {
    const context = useContext(FiltersContext);
    if (!context) {
        throw new Error('useFilters must be used within a FiltersProvider');
    }
    return context;
};
