import { Paper, Typography, Box } from '@mui/material';
export default function ExpenseCardComponent({ title, amount, date }) {
  return (
    //ogarnąć bezwzględne importy
    //poczytać o styled components
    <Paper
      elevation={2}
      sx={{
        p: 2,
        borderRadius: 2,
        width: 250,
      }}>
      <Typography variant="h6">{title}</Typography>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center">
        <Typography
          variant="body2"
          color="text.secondary">
          {date}
        </Typography>
        <Typography
          variant="subtitle1"
          fontWeight="bold"
          color={amount < 0 ? 'error.main' : 'success.main'}>
          {amount < 0 ? '-' : '+'}${Math.abs(amount).toFixed(2)}
        </Typography>
      </Box>
    </Paper>
  );
}
