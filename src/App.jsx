import Page from './Page.jsx'
import ThemeContextProvider from './ThemeContextProvider.jsx';

const App = () => {
  return(
    <ThemeContextProvider>
      <Page />
    </ThemeContextProvider>
  )
}

export default App;