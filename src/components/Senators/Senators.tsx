import { useFilterSenatorsByParties } from '../../hooks/useFilterSenatorsByParties';
import { useOrderSenatorsByAdvisors } from '../../hooks/useOrderSenatorsByAdvisors';
import { useSenators } from '../../hooks/useSenators';
import { AdvisorOrderType } from '../../utils/filterProps';
import { SenatorCard } from '../Card';

interface ISenatorProps {
  filters: string[];
  sortByAdvisors: AdvisorOrderType;
}

export const Senators: React.FC<ISenatorProps> = ({
  filters,
  sortByAdvisors,
}) => {
  const senators = useSenators();

  const filteredSenators = useFilterSenatorsByParties(senators, filters);

  const orderedSenators = useOrderSenatorsByAdvisors(
    filteredSenators,
    sortByAdvisors,
  );

  return (
    <>
      {orderedSenators.map((senator, index) => (
        <SenatorCard
          key={index}
          id={senator.id}
          name={senator.name}
          surname={senator.surname}
          party={senator.party}
          block={senator.block}
          province={senator.province}
          asesors={senator.asesors}
          social_media={senator.social_media}
        />
      ))}
    </>
  );
};
