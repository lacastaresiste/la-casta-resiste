import { useContext } from "react";
import { MediaQueryContext } from "./MediaQueryContext";

export const useMediaQueries = () => {
    const context = useContext(MediaQueryContext);
    if (!context) {
        throw new Error('useMediaQueries must be used within a MediaQueryProvider');
    }
    return context;
};
