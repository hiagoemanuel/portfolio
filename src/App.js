import { useContext } from 'react';
import { ThemeContext } from './contexts/themes';
import { AppRoutes } from './pages/router';
import { GlobalStyle } from './styles/global-style';
import { Reset } from './styles/reset';
import { Responsive } from './styles/responsive';
import { Variables } from './styles/variables';

const App = () => {
  const { mainTheme } = useContext(ThemeContext)

  return (
    <>
      <GlobalStyle />
      <Variables theme={mainTheme} />
      <Responsive />
      <Reset />

      <AppRoutes />
    </>
  );
}

export default App;
