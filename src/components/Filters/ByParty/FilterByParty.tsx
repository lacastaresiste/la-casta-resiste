import { capitalizeWords } from '../../../utils/utils';
import { IFilterByPartyProps } from './types';
import { useSenators } from '../../../hooks/useSenators';
import { useGeneratePartiesFilters } from '../../../hooks/useGeneratePartiesFilters';
import * as ToggleGroup from '@radix-ui/react-toggle-group';

const toggleGroupItemClasses =
  'hover:bg-slate4 color-slate11 data-[state=on]:bg-slate5 data-[state=on]:text-slate12 box-border p-2 flex items-center justify-center bg-slate3 text-base focus:z-10 focus:shadow-black focus:outline-none';

export const FilterByParty: React.FC<IFilterByPartyProps> = ({
  filters,
  onChange,
}) => {
  const senators = useSenators();
  const partiesFilter = useGeneratePartiesFilters(senators);

  return (
    <ToggleGroup.Root
      className="ToggleGroup flex flex-col bg-slate6 rounded h-fit border border-slate6"
      type="multiple"
      value={filters}
      onValueChange={(value) => {
        if (value) onChange(value);
      }}
      aria-label="cameras switcher"
    >
      {partiesFilter.map((party) => (
        <ToggleGroup.Item
          className={toggleGroupItemClasses}
          value={party}
          aria-label="senadores"
        >
          {capitalizeWords(party)}
        </ToggleGroup.Item>
      ))}
    </ToggleGroup.Root>
  );
};
