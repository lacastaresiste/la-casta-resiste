import "./App.css";
import senado from "./assets/senado.json";
import { useState } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Header } from "./components/Header";
import { FilterByParty } from "./components/FilterByParty";
import { Senators } from "./components/Senators";

const darkTheme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "#EEE",
			light: "#FF0000",
			dark: "#FF0000",
			contrastText: "#242105",
		},
	},
});

window.onbeforeunload = function () {
	window.scrollTo(0, 0);
};

function App() {
	const [filters, setFilters] = useState(() => ["none"]);

	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<main className="flex flex-col gap-4 bg-background relative">
				<div className="flex flex-col w-full items-center justify-center mb-5 lg:mb-4">
					<Header />
					<nav className="w-full flex flex-col justify-center items-center mt-8 border-b border-b-[#666] pb-8">
						<FilterByParty
							senado={senado}
							filters={filters}
							onChange={(filter) => setFilters(filter)}
						/>
					</nav>
				</div>
				<section className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 min-[2500px]:grid-cols-5 lg:gap-8 p-2 lg:p-20 lg:pt-0">
					<Senators filters={filters} />
				</section>
			</main>
		</ThemeProvider>
	);
}

export default App;
