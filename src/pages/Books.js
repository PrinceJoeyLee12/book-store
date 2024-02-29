import { useState, useCallback } from 'react';
import { Divider, Grid, Stack, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useSelector } from '../redux/store';
import Page from '../components/Page';
import Header from '../components/Header';
import CardTemplate from '../components/CardTemplate';
import { BOOK_TYPE, GENDER } from '../constants/index';
import { booksByTypeOrGender } from '../utils/index';

const StyledButton = styled(Button)(({ theme }) => ({
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
  },
}));

const StyledLinkButton = styled(Button)(({ theme }) => ({
  cursor: 'pointer',
  textTransform: 'none',
  '&:hover': {
    textDecoration: 'underline',
    backgroundColor: theme.palette.text.white,
  },
}));

export default function Books() {
  const [bookType, setBookType] = useState('');
  const authors = useSelector((state) => state.author.authors);
  const booksByFemaleAuthors = booksByTypeOrGender({ authors, gender: GENDER.FEMALE, sortByName: true, type: bookType });
  const booksByMaleAuthors = booksByTypeOrGender({ authors, gender: GENDER.MALE, sortByName: true, type: bookType });

  const handleChangeBookType = useCallback((type) => {
    setBookType(type);
  }, []);

  return (
    <>
      <Page title='List of Books'>
        <Header />
        <Grid container justifyContent={'center'}>
          <Grid item xs={12} sm={6}>
            <CardTemplate books={booksByMaleAuthors} title='Books With Male Owners' />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CardTemplate books={booksByFemaleAuthors} title='Books With Female Owners' />
          </Grid>
        </Grid>
        <Divider sx={{ pt: 10 }} />

        <Stack spacing={3} alignItems='flex-end' sx={{ mt: 3, mr: 3 }}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' sx={{ my: 2 }}>
            <StyledLinkButton sx={{ mr: 3 }} variant='text' onClick={() => handleChangeBookType(BOOK_TYPE.HARDCOVER)}>
              Hardcover only
            </StyledLinkButton>
            <StyledButton size='small' variant='contained' onClick={() => handleChangeBookType('')}>
              Get Books
            </StyledButton>
          </Stack>
        </Stack>
      </Page>
    </>
  );
}
