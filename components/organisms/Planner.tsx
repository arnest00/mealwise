import DayContainer from '../molecules/DayContainer';

type PlannerProps = {
  daysOfTheWeek: string[],
  shoppingDay: string
};

const Planner = ({ daysOfTheWeek, shoppingDay }: PlannerProps) => {
  const indexOfShoppingDay = daysOfTheWeek.indexOf(shoppingDay);

  const newShoppingWeekStart = daysOfTheWeek.slice(indexOfShoppingDay);
  const newShoppingWeekEnd = daysOfTheWeek.slice(0, indexOfShoppingDay + 1);

  const shoppingWeek = [...newShoppingWeekStart, ...newShoppingWeekEnd].map((day, idx) => (
    { id: idx, name: day }
  ));

  return (
    <article>
      <h2 className="section text-align-center">
        Shopping Day:
        {' '}
        {shoppingDay}
      </h2>

      {shoppingWeek.map((day) => (
        <DayContainer
          key={day.id}
          dayId={day.id}
          dayName={day.name}
        />
      ))}
    </article>
  );
};

export default Planner;
