import ReactDOM from 'react-dom/client';
import { HistoryRouter as Router } from 'redux-first-history/rr6';
import { HelmetProvider } from 'react-helmet-async';
import { Provider as ReduxProvider } from 'react-redux';
import { store, history } from './redux/store';
import ThemeProvider from './theme';
//
import App from './App';
import reportWebVitals from './reportWebVitals';

// eslint-disable-next-line react-hooks/exhaustive-deps
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HelmetProvider>
    <ReduxProvider store={store}>
      <Router history={history}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Router>
    </ReduxProvider>
  </HelmetProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
