import AboutPage from 'pages/AboutPage';
import DashboardPage from 'pages/DashboardPage';
import ExpensesPage from 'pages/ExpensesPage';
import { Routes, Route } from 'react-router-dom';
import { routes } from 'auth/routes';

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path={routes.expenses}
        element={<ExpensesPage />}
      />
      <Route
        path={routes.about}
        element={<AboutPage />}
      />
      <Route
        path={routes.dashboard}
        element={<DashboardPage />}
      />
    </Routes>
  );
}
