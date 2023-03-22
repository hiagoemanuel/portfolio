import { useContext } from 'react';
import { ThemeContext } from './contexts/themes';
import { AppRoutes } from './pages/router';
import { GlobalStyle } from './styles/global-style';
import { Reset } from './styles/reset';
import { Variables } from './styles/variables';

const App = () => {
  const { mainTheme } = useContext(ThemeContext)

  return (
    <>
      <GlobalStyle />
      <Variables theme={mainTheme} />
      <Reset />

      <AppRoutes />
    </>
  );
}

export default App;
