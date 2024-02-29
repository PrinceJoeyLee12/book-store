import React from 'react';
import { styled } from '@mui/material/styles';

const HeaderStyle = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.primary,
  color: theme.palette.background.paper,
  padding: '10px',
  textAlign: 'center',
}));

const Header = () => {
  return <HeaderStyle>Owners and Books</HeaderStyle>;
};

export default Header;
