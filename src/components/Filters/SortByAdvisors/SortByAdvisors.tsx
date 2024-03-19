import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import { ISortByAdvisorsProps } from './types';

export const SortByAdvisors: React.FC<ISortByAdvisorsProps> = ({
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-[0.85em] text-center">
        Ordenar por cantidad de asesores
      </p>
      <div className="flex flex-col items-center gap-6">
        <ToggleButtonGroup
          value={value}
          exclusive
          onChange={(event, newValue) => {
            event;
            onChange(newValue);
          }}
        >
          <ToggleButton key={1} value={true}>
            <span className="text-[12px] lg:text-[0.7em]">Mayor</span>
          </ToggleButton>
          <ToggleButton key={0} value={false}>
            <span className="text-[12px] lg:text-[0.7em]">Menor</span>
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    </div>
  );
};
