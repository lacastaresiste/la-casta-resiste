// import { useFilterMenuContext } from '../../context/useFilterMenuContext';
// import { useMediaQueriesContext } from '../../context/useMediaQueriesContext';

interface INavbarProps {
  children: React.ReactNode;
}

export const Navbar: React.FC<INavbarProps> = ({ children }) => {
  // const { setMenuOpen } = useFilterMenuContext();
  return (
    <nav className="w-full flex flex-col gap-8 tablet:flex-row justify-between items-center">
      <h1 className="text-[1.2em] min-w-[100px] tablet:text-[1.2em] desktop:text-2xl font-medium text-center">
        LA CASTA RESISTE
      </h1>
      <div className="flex flex-row gap-4">{children}</div>
    </nav>
  );
};
