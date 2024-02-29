import { Suspense, lazy } from 'react';
import { Navigate, useRoutes, Outlet } from 'react-router-dom';
import { styled } from '@mui/material/styles';

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Component {...props} />
    </Suspense>
  );
};

const HeaderStyle = styled('header')(({ theme }) => ({
  top: 0,
  left: 0,
  lineHeight: 0,
  width: '100%',
  position: 'absolute',
  padding: theme.spacing(3, 3, 0),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(5, 5, 0),
  },
}));

export function Layout() {
  return (
    <>
      <HeaderStyle />
      <Outlet />
    </>
  );
}

export function GuestGuard({ children }) {
  // Implement logic for Guards
  return <>{children}</>;
}

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: (
        <GuestGuard>
          <Layout />
        </GuestGuard>
      ),
      children: [
        { element: <Navigate to={'/books'} replace />, index: true },
        {
          path: 'books',
          children: [
            { element: <Navigate to='/books/list' replace />, index: true },
            { path: 'list', element: <Books /> },
          ],
        },
      ],
    },
  ]);
}

// Books
const Books = Loadable(lazy(() => import('../pages/Books')));
