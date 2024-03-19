import { ToggleButtonGroup, ToggleButton, Typography } from '@mui/material';
import { ISortByAdvisorsProps } from './types';

export const SortByAdvisors: React.FC<ISortByAdvisorsProps> = ({
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Typography className="text-center">
        Ordenar por cantidad de asesores
      </Typography>
      <div className="flex flex-col items-center gap-6">
        <ToggleButtonGroup
          value={value}
          exclusive
          onChange={(event, newValue) => {
            event;
            onChange(newValue);
          }}
        >
          <ToggleButton
            sx={{
              fontWeight: 600,
            }}
            size="small"
            key={1}
            value={true}
          >
            Mayor
          </ToggleButton>
          <ToggleButton
            sx={{
              fontWeight: 600,
            }}
            size="small"
            key={0}
            value={false}
          >
            Menor
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    </div>
  );
};
