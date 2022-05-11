import { useRouter } from 'next/router';

import Button from '../atoms/Button';

type DayContainerProps = {
  dayName: string,
};

const DayContainer = ({ dayName }: DayContainerProps) => {
  const router = useRouter();

  const handleAddMeal = () => {
    router.push(
      {
        pathname: '/planner/add',
        query: { day: dayName },
      },
      '/planner/add',
    );
  };

  return (
    <section>
      <h3 className="bigger text-align-center">{dayName}</h3>

      <Button
        buttonType="button"
        buttonName="add meal"
        modifier="--link"
        onClick={handleAddMeal}
      />
    </section>
  );
};

export default DayContainer;
