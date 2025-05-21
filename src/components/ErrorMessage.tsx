import type { ErrorType } from '../types/ErrorType';

interface ErrorMessageProps {
  error: ErrorType;
}

const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return (
    <div>
      <h2>Error {error.status}</h2>
      <p>{error.message}</p>
      {error.details && <p>{error.details}</p>}
    </div>
  );
};

export default ErrorMessage;
