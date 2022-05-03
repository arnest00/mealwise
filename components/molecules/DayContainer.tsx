import Button from '../atoms/Button';

type DayContainerProps = {
  dayName: string
};

const DayContainer = ({ dayName }: DayContainerProps) => (
  <section>
    <h3 className="bigger text-align-center">{dayName}</h3>

    <Button
      buttonType="button"
      buttonName="add meal"
    />
  </section>
);

export default DayContainer;
