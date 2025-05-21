import { Link } from 'react-router-dom';

interface NotFoundComponentProps {
  message?: string;
}

const NotFoundComponent = ({ message = 'Page not found' }: NotFoundComponentProps) => {
  return (
    <div>
      <h1>404</h1>
      <p>{message}</p>
      <Link to="/">Return to Home</Link>
    </div>
  );
};

export default NotFoundComponent;
