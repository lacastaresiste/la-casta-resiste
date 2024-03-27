// import * as ToggleGroup from '@radix-ui/react-toggle-group';
// import { useState } from 'react';
import * as Select from '@radix-ui/react-select';
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';

const SwitchCameras = () => {
  // const [value, setValue] = useState('senators');

  return (
    <Select.Root defaultValue="senate">
      <Select.Trigger
        className="w-full inline-flex outline-none items-center h-[30px] gap-2 pl-2 pr-2 justify-between bg-slate2 transition-colors rounded border border-slate6"
        aria-label="sections"
      >
        <Select.Value placeholder="" />
        <Select.Icon className="text-slate11 p-2">
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          position="popper"
          className="inline-flex bg-slate2 items-start rounded border border-slate6"
          sideOffset={8}
        >
          <Select.ScrollUpButton className="">
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className="">
            <Select.Item
              value="senate"
              className="hover:bg-slate4 p-1 cursor-pointer outline-none"
            >
              <Select.ItemText>Senado</Select.ItemText>
            </Select.Item>
            <Select.Item
              value="diputies"
              className="hover:bg-slate4 p-1 cursor-pointer outline-none"
            >
              <Select.ItemText>Diputados</Select.ItemText>
            </Select.Item>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
    // <ToggleGroup.Root
    //   className="ToggleGroup border border-slate6 inline-flex bg-slate6 rounded space-x-px h-fit"
    //   type="single"
    //   value={value}
    //   orientation="horizontal"
    //   onValueChange={(value) => {
    //     if (value) setValue(value);
    //   }}
    //   aria-label="cameras switcher"
    // >
    //   <ToggleGroup.Item
    //     className={toggleGroupItemClasses}
    //     value="senators"
    //     aria-label="senadores"
    //   >
    //     Senadores
    //   </ToggleGroup.Item>
    //   <ToggleGroup.Item
    //     className={toggleGroupItemClasses}
    //     value="diputies"
    //     aria-label="diputados"
    //   >
    //     Diputados
    //   </ToggleGroup.Item>
    // </ToggleGroup.Root>
  );
};

export default SwitchCameras;
