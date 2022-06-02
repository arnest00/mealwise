import Button from '../atoms/Button';

const FormActions = () => (
  <>
    <Button
      buttonType="submit"
      buttonName="save"
      modifier="--good-job"
    />
    <Button
      buttonType="reset"
      buttonName="clear"
      modifier="--bad-job"
    />
  </>
);

export default FormActions;
