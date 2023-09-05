import { useContext } from "react"

import { AppRoutes } from "./pages/router"
import { ThemeContext } from "./contexts/themes"

import { GlobalStyle } from "./styles/global-style"
import { Variables } from "./styles/variables"
import { Reset } from "./styles/reset"

function App() {
  const { mainTheme } = useContext(ThemeContext)

  return (
    <>
      <GlobalStyle/>
      <Variables theme={mainTheme} />
      <Reset />

      <AppRoutes/>
    </>
  )
}

export default App
