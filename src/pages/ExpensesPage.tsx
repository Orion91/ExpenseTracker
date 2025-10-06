import { Container, Typography, Box } from '@mui/material';
import { expensesDummyData } from '../data';
import ExpenseCardComponent from '../components/ExpenseCardComponent';

function ExpensesPage() {
  return (
    <Container sx={{ py: 4 }}>
      <Typography
        variant="h4"
        gutterBottom>
        Expenses
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
          justifyContent: 'flex-start',
        }}>
        {expensesDummyData.map((expense) => (
          <ExpenseCardComponent {...expense} />
        ))}
      </Box>
    </Container>
  );
}

export default ExpensesPage;
