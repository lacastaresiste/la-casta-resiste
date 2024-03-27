import ReportIcon from '@mui/icons-material/Report';
import { useState } from 'react';

const advice_read = localStorage.getItem('advice-read');
let data = false;
if (advice_read) {
  data = JSON.parse(advice_read);
}

export const Disclaimer = () => {
  const [close, setClose] = useState<boolean>(false);

  function handleClick() {
    setClose(true);
    localStorage.setItem('advice-read', JSON.stringify(true));
  }

  if (data) {
    return <></>;
  }

  return (
    <>
      {close ? null : (
        <div className="absolute z-[9999] inset-0 flex justify-center items-center bg-[#000000DF]">
          <div className="bg-slate2 p-10 flex flex-col gap-8 items-center justify-center max-w-[400px] border rounded-md border-slate6">
            <ReportIcon className="text-[#A20]" fontSize="large" />
            <div className="flex flex-col items-center">
              <h3 className="text-[1rem] text-center p-2 lg:p-0">
                <i className="text-white">
                  aviso legal: el contenido en esta web es puramente de índole
                  público proveniente del sitio gubernamental
                </i>
              </h3>
              <a
                href="http://www.senado.gob.ar"
                target="_blank"
                className="text-[#A20] underline"
              >
                www.senado.gob.ar
              </a>
            </div>
            <button
              className="border border-slate6 p-1 w-full rounded-md hover:bg-slate6"
              onClick={handleClick}
            >
              Aceptar
            </button>
          </div>
        </div>
      )}
    </>
  );
};
