import { Container } from '@mui/material';
import AppRoutes from './auth/AppRoutes';
import NavbarComponent from './components/NavbarComponent';
import './App.css';

function App() {
  return (
    <Container>
      <NavbarComponent />
      <AppRoutes />
    </Container>
  );
}

export default App;
