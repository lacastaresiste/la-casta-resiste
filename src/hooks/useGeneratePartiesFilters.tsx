import { Senator } from '../utils/filterProps';

export function useGeneratePartiesFilters(arr: Senator[]) {
  const array = arr.map((party: Senator) => {
    return party.party;
  });
  return array.filter(
    (value: string, index: number) => array.indexOf(value) === index,
  );
}
