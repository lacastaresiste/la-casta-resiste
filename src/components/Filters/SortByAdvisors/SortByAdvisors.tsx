import { ISortByAdvisorsProps } from './types';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { AdvisorOrderType } from '../../../utils/filterProps';

const toggleGroupItemClasses =
  'hover:bg-violet3 color-mauve11 data-[state=on]:bg-slate5 data-[state=on]:text-slate12 h-[28px] box-border p-2 flex items-center justify-center bg-slate3 text-base leading-4 first:rounded-l last:rounded-r focus:z-10 focus:shadow-black focus:outline-none';

export const SortByAdvisors: React.FC<ISortByAdvisorsProps> = ({
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <span className="text-center text-[0.95em]">Ordenar por asesores</span>
      <div className="flex flex-col items-center gap-6">
        <ToggleGroup.Root
          className="ToggleGroup border border-slate6 inline-flex bg-slate6 rounded space-x-px h-fit"
          type="single"
          value={value}
          orientation="horizontal"
          onValueChange={(value: AdvisorOrderType) => {
            if (value) onChange(value);
          }}
          defaultValue="senators"
          aria-label="cameras switcher"
        >
          <ToggleGroup.Item
            className={toggleGroupItemClasses}
            value="ascending"
            aria-label="senadores"
          >
            Mayor
          </ToggleGroup.Item>
          <ToggleGroup.Item
            className={toggleGroupItemClasses}
            value="descending"
            aria-label="diputados"
          >
            Menor
          </ToggleGroup.Item>
        </ToggleGroup.Root>
      </div>
    </div>
  );
};
