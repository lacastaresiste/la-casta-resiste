import { useState } from 'react';

interface ICardDetailsProps {
  children: React.ReactNode;
}

export const CardDetails: React.FC<ICardDetailsProps> = ({ children }) => {
  const [close, setClose] = useState<boolean>(false);

  function handleClick() {
    setClose(true);
    localStorage.setItem('advice-read', JSON.stringify(true));
  }

  return (
    <>
      {close ? null : (
        <div className="absolute z-[9999] inset-0 flex justify-center items-center bg-[#000000DF]">
          <div className="bg-slate2 p-10 flex flex-col gap-8 items-center justify-center max-w-[400px] border rounded-md border-slate6">
            <div className="flex flex-col items-center">{children}</div>
            <button
              className="border border-slate6 p-1 w-full rounded-md hover:bg-slate6"
              onClick={handleClick}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
};
