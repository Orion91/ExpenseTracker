import { Link } from 'react-router-dom';
import { routes } from '../auth/routes';

export default function NavbarComponent() {
  return (
    <nav>
      <Link to={routes.expenses}>
        <button>Expenses</button>
      </Link>
      <Link to={routes.dashboard}>
        <button>Dashboard</button>
      </Link>
      <Link to={routes.about}>
        <button>About</button>
      </Link>
    </nav>
  );
}
