import { AdvisorOrderType, Senator } from '../utils/filterProps';

export const useOrderSenatorsByAdvisors = (
  senate: Senator[],
  order: AdvisorOrderType,
) => {
  return order === 'ascending'
    ? senate.sort((a, b) => b.asesors - a.asesors)
    : senate.sort((a, b) => a.asesors - b.asesors);
};
