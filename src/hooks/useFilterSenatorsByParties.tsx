import { Senator } from '../utils/filterProps';

export const useFilterSenatorsByParties = (
  senate: Senator[],
  filters: string[],
) => {
  return filters.length > 1
    ? senate.filter((senator) =>
        filters.some((filter) => senator.party.includes(filter)),
      )
    : senate;
};
