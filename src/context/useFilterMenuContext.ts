import { useContext } from "react";
import { FilterMenuContext } from "./FilterMenuContext";

export const useFilterMenuContext = () => {
    const context = useContext(FilterMenuContext);
    if (!context) {
        throw new Error('useFilterMenu must be used within a FilterMenuProvider');
    }
    return context;
};
