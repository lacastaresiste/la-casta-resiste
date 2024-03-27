import * as Popover from '@radix-ui/react-popover';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Cross2Icon } from '@radix-ui/react-icons';

interface IFilterMenuProps {
  children: React.ReactNode;
}

const FilterMenu: React.FC<IFilterMenuProps> = ({ children }) => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button
          className="rounded border border-slate6 h-[30px] inline-flex p-2 items-center justify-center text-slate12 bg-slate2 transition-colors hover:bg-slate4 cursor-default outline-none"
          aria-label="Update dimensions"
        >
          <FilterAltIcon />
          <span>Filtros</span>
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="rounded border border-slate6 mr-[16px] p-5 w-[260px] bg-slate3 will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
          sideOffset={8}
        >
          <div className="flex flex-col gap-2.5 ">{children}</div>
          <Popover.Close
            className="rounded-full h-[25px] w-[25px] inline-flex items-center justify-center text-slate12 absolute top-[5px] right-[5px] hover:bg-slate5 outline-none cursor-default"
            aria-label="Close"
          >
            <Cross2Icon />
          </Popover.Close>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default FilterMenu;
