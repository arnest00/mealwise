import DayContainer from '../molecules/DayContainer';

type PlannerProps = {
  daysOfTheWeek: string[],
  shoppingDay: string
};

const Planner = ({ daysOfTheWeek, shoppingDay }: PlannerProps) => {
  const indexOfShoppingDay = daysOfTheWeek.indexOf(shoppingDay);

  const newShoppingWeekStart = daysOfTheWeek.slice(indexOfShoppingDay);
  const newShoppingWeekEnd = daysOfTheWeek.slice(0, indexOfShoppingDay + 1);

  const shoppingWeek = [...newShoppingWeekStart, ...newShoppingWeekEnd];

  return (
    <article>
      <h2 className='section text-align-center'>Shopping Day: {shoppingDay}</h2>

      {shoppingWeek.map((day, idx) => (
        <DayContainer
          key={idx}
          dayName={day}
        />
      ))}
    </article>
  );
};

export default Planner;
