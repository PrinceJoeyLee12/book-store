import React from 'react';
import { Card, CardContent, Typography, CardHeader } from '@mui/material';
import { styled } from '@mui/material/styles';

const HeaderTitleStyle = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.background.primary,
  color: theme.palette.background.paper,
  padding: 0,
  paddingTop: '10px',
  paddingBottom: '10px',
  textAlign: 'center',
}));

const CardHeaderStyle = styled(CardHeader)(() => ({
  padding: 0,
}));

function BookCard({ title = '', books = [] }) {
  return (
    <Card sx={{ p: 2, borderBlock: 10, maxWidth: 600 }}>
      <CardHeaderStyle
        title={
          <HeaderTitleStyle color='textSecondary' gutterBottom>
            {title}
          </HeaderTitleStyle>
        }
      />

      <CardContent>
        {books.map((book, index) => (
          <Typography component='h2' key={index}>
            {book?.name}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
}

export default BookCard;
