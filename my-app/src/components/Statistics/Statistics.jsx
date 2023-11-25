import { StatisticItem } from 'components';
import { StatisticsList, StatisticTitle } from './Statistics.styled';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';

const img = [
  <FaRegThumbsUp />,
  <MdPeople />,
  <MdOutlineProductionQuantityLimits />,
  <GiTreeDoor />,
];

export const Statistics = ({ title, stats }) => {
  return (
    <>
      <StatisticTitle>{title}</StatisticTitle>

      <StatisticsList>
        {stats.map(({ id, total, title }, index) => (
          <StatisticItem
            key={id}
            total={total}
            title={title}
            icon={img[index]}
          />
        ))}
      </StatisticsList>
    </>
  );
};
