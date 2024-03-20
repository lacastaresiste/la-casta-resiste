import { ReactNode } from "react";
import { AdvisorOrderType } from "../utils/filterProps";

export interface FilterProviderProps {
    children: ReactNode;
}

export interface FiltersContextType {
    filters: string[];
    setFilters: (filters: string[]) => void;
    orderByAdvisors: AdvisorOrderType;
    setOrderByAdvisors: (order: AdvisorOrderType) => void;
}

export interface MediaQueryProviderProps {
    children: ReactNode;
}

export interface MediaQueryContextType {
    isMobile: boolean;
}

export interface FilterMenuProviderProps {
    children: ReactNode;
}

export interface FilterMenuContextType {
    menuOpen: boolean;
    setMenuOpen: (menuOpen: boolean) => void;
    closeMenu: () => void
}