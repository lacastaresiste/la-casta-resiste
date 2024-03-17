import "./App.css";
import senado from "./assets/senado.json";
import ReportIcon from "@mui/icons-material/Report";
import { useState } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Header } from "./components/Header";
import { FilterByParty } from "./components/FilterByParty";
import { Senators } from "./components/Senators";

const darkTheme = createTheme({
	palette: {
		mode: "dark",
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
				<div className="flex flex-col w-full items-center justify-center mb-5 lg:mb-20">
					<Header />
					<nav className="w-full flex flex-col justify-center items-center mt-8 border-b border-b-[#666] pb-8">
						<h2 className="mb-4">Filtrar por partido</h2>
						<FilterByParty
							senado={senado}
							filters={filters}
							onChange={(filter) => setFilters(filter)}
						/>
					</nav>
					<div className="flex flex-row justify-center items-center gap-2 mb-2 mt-8">
						<ReportIcon className="text-primary" />
						<span className="text-white">Disclaimer</span>
					</div>
					<h3 className="text-[0.8rem] text-center p-2 lg:p-0">
						<i className="text-white">
							el contenido en esta web es puramente de índole público
							proveniente del sitio gubernamental www.senado.gob.ar
						</i>
					</h3>
				</div>
				<section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 min-[2500px]:grid-cols-5 gap-2 lg:gap-8 p-2 lg:p-20 lg:pt-0">
					<Senators filters={filters} />
				</section>
			</main>
		</ThemeProvider>
	);
}

export default App;
