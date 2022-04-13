import DayContainer from '../molecules/DayContainer';

type PlannerProps = {
  daysOfTheWeek: string[],
  shoppingDay: string
};

const Planner = ({ daysOfTheWeek, shoppingDay }: PlannerProps) => {
  const indexOfShoppingDay = daysOfTheWeek.indexOf(shoppingDay);

  const createShoppingWeek = (idx: number) => {
    const result = new Array(0);
    const daysOfTheWeekCopy = [...daysOfTheWeek];
    let dayCounter = 0;
    
    while (result.length < 7) {
      if (dayCounter + idx < 7) {
        result.push(daysOfTheWeek[dayCounter + idx]);
        dayCounter = dayCounter + 1;
      } else {
        const nextDay = daysOfTheWeekCopy.shift();
        result.push(nextDay);
      };
    };

    return result;
  };

  const shoppingWeek = createShoppingWeek(indexOfShoppingDay);

  return (
    <article>
      <h2 className='text-align-center'>Shopping Day: {shoppingDay}</h2>

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
