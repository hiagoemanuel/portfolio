import { AppRoutes } from './pages/router';
import { GlobalStyle } from './styles/global-style';
import { Reset } from './styles/reset';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Reset />

      <AppRoutes/>
    </>
  );
}

export default App;
