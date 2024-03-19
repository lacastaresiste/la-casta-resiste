import { capitalizeWords, filterPartys } from '../../../utils/utils';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { IFilterByPartyProps } from './types';
import senado from '../../../assets/senado.json';

const partys: string[] = filterPartys(senado);

export const FilterByParty: React.FC<IFilterByPartyProps> = ({
  filters,
  onChange,
}) => {
  const handleChange = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    newFormats: string[],
  ) => {
    event;
    onChange(newFormats);
  };
  return (
    <div className="flex flex-col justify-center items-center gap-4 mt-4">
      <p className="text-[0.85em]">Filtrar por partidos</p>
      <div className="flex flex-col items-center">
        <div className="flex flex-col">
          <div className="flex flex-col items-center gap-6">
            <ToggleButtonGroup
              value={filters}
              color="primary"
              onChange={handleChange}
              orientation={'vertical'}
              aria-label="senators filters"
            >
              {partys.map((party: string, index: number) => (
                <ToggleButton
                  key={index}
                  value={party}
                  aria-label={party}
                  sx={{
                    border: '1px solid #555 !important',
                  }}
                >
                  <span className="text-[12px] lg:text-[0.7em]">
                    {capitalizeWords(party)}
                  </span>
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </div>
        </div>
      </div>
    </div>
  );
};
