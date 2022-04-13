import Button from '../atoms/Button';

type DayContainerProps = {
  dayName: string
};

const DayContainer = ({ dayName }: DayContainerProps ) => {
  return (
    <section>
      <h3 className='text-align-center'>{dayName}</h3>

      <Button
        buttonType='button'
        buttonName='add meal'
      />
    </section>
  );
};

export default DayContainer;
