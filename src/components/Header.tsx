import ReportIcon from "@mui/icons-material/Report";

export const Header = () => {
	return (
		<header className="w-full shadow-md flex flex-col justify-center items-center bg-navbar place-content-center border-b border-b-[#666] p-4">
			<h1 className="text-lg text-title font-medium text-center col-start-2 col-end-3 row-start-1 row-end-2">
				LA CASTA SE RESISTE - VOTOS NEGATIVOS
			</h1>
			<div className="flex flex-row gap-2 items-center justify-center">
				<ReportIcon className="text-primary" />
				<h3 className="text-[0.8rem] text-center p-2 lg:p-0">
					<i className="text-white">
						aviso legal: el contenido en esta web es puramente de índole público proveniente
						del sitio gubernamental www.senado.gob.ar
					</i>
				</h3>
			</div>
		</header>
	);
};
