import { capitalizeWords } from '../../../utils/utils';
import { ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { IFilterByPartyProps } from './types';
import { useSenators } from '../../../hooks/useSenators';
import { useGeneratePartiesFilters } from '../../../hooks/useGeneratePartiesFilters';

export const FilterByParty: React.FC<IFilterByPartyProps> = ({
  filters,
  onChange,
}) => {
  const senators = useSenators();
  const partiesFilter = useGeneratePartiesFilters(senators);

  const handleChange = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    newFormats: string[],
  ) => {
    event;
    onChange(newFormats);
  };
  return (
    <div className="flex flex-col justify-center items-center gap-4 mt-4">
      <Typography>Filtrar por partidos</Typography>
      <div className="flex flex-col items-center">
        <div className="flex flex-col">
          <div className="flex flex-col items-center gap-6">
            <ToggleButtonGroup
              value={filters}
              onChange={handleChange}
              orientation={'vertical'}
              aria-label="senators filters"
            >
              {partiesFilter.map((party: string, index: number) => (
                <ToggleButton
                  size="small"
                  key={index}
                  value={party}
                  aria-label={party}
                  sx={{
                    fontWeight: 600,
                  }}
                >
                  {capitalizeWords(party)}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </div>
        </div>
      </div>
    </div>
  );
};
