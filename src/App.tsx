import "./App.css";
import { DiputyCard } from "./components/DiputyCard";
import { members } from "./assets/senado.json";
import ReportIcon from "@mui/icons-material/Report";

function App() {
	return (
		<main className="flex flex-col gap-4 bg-background">
			<header className="w-full flex flex-row items-center justify-center mt-8 ">
				<h1 className="text-xl text-primary font-bold text-center">
					LA CASTA SE RESISTE
				</h1>
			</header>
			<section
				className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 min-[2500px]:grid-cols-5 gap-2 lg:gap-8 p-2 lg:p-20 lg:pt-0`}
			>
				{members.map((member) => (
					<DiputyCard
						IMG={member.IMG}
						IMG_SMALL={member.IMG_SMALL}
						NOMBRE={member.NOMBRE}
						APELLIDO={member.APELLIDO}
						PARTIDO={member.PARTIDO}
						BLOQUE={member.BLOQUE}
						PROVINCIA={member.PROVINCIA}
						EMAIL={member.EMAIL}
						ASESORES={member.ASESORES}
						SOCIAL_MEDIA={member.SOCIAL_MEDIA}
					/>
				))}
			</section>
			<footer>
				<div className="flex flex-col w-full items-center justify-center gap-1 mb-5 lg:mb-20">
					<div className="flex flex-row justify-center items-center gap-2 mb-2">
						<ReportIcon className="text-primary" />
						<span className="text-white">Disclaimer</span>
					</div>
					<h3 className="text-[0.8rem] text-center">
						<i className="text-white">
							el contenido en esta web es puramente de índole público
							proveniente del sitio gubernamental www.senado.gob.ar
						</i>
					</h3>
				</div>
			</footer>
		</main>
	);
}

export default App;
