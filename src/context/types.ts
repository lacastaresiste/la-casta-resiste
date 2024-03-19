import { ReactNode } from "react";

export interface FilterProviderProps {
    children: ReactNode;
}

export interface FiltersContextType {
    filters: string[];
    setFilters: (newFormats: string[]) => void;
    sortByAdvisors: boolean;
    setSortByAdvisors: (value: boolean) => void;
}

export interface MediaQueryProviderProps {
    children: ReactNode;
}

export interface MediaQueryContextType {
    isMobile: boolean;
}

export interface MobileMenuProviderProps {
    children: ReactNode;
}

export interface MobileMenuContextType {
    menuOpen: boolean;
    setMenuOpen: (menuOpen: boolean) => void;
    closeMenu: () => void
}