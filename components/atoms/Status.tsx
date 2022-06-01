type StatusProps = {
  status: string,
};

const Status = ({ status }: StatusProps) => (
  <p className="smaller good-job">{status}</p>
);

export default Status;
