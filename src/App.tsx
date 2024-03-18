import "./App.css";
import { useMemo, useState } from "react";
import { Header } from "./components/Header/Header";
import { Senators } from "./components/Senators/Senators";
import { Menu } from "./components/Menu/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

window.onbeforeunload = function () {
	window.scrollTo(0, 0);
};

function App() {
	const [filters, setFilters] = useState(() => ["none"]);

	const [sortByAdvisors, setSortByAdvisors] = useState(true);

	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode: prefersDarkMode ? "dark" : "light",
				},
			}),
		[prefersDarkMode]
	);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<main className="flex flex-row bg-background max-h-[100vh] overflow-hidden p-4 gap-4">
				<Menu
					filters={filters}
					setFilters={setFilters}
					sortByAdvisors={sortByAdvisors}
					setSortByAdvisors={setSortByAdvisors}
				/>
				<div className="flex flex-col min-h-[100vh]">
					<div className="flex flex-col w-full items-center justify-center">
						<Header />
					</div>
					<section id="senators" className="overflow-y-scroll mt-4 rounded-md">
						<div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 min-[2500px]:grid-cols-5 lg:gap-8 pr-4">
							<Senators filters={filters} sortByAdvisors={sortByAdvisors} />
						</div>
					</section>
				</div>
			</main>
		</ThemeProvider>
	);
}

export default App;
