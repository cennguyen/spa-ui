import { ThemeProvider } from 'styled-components'
import getTheme from './app/styles'
import { RouterProvider } from 'react-router-dom'
import GlobalStyle from './app/styles/GlobalStyled/GlobalStyle'
import { useGlobalConfig } from './app/context/Global'
import router from './services/routers'

const App = () => {
    const { theme } = useGlobalConfig();

    return (
        <ThemeProvider theme={{  ...getTheme(theme) }}>
            <GlobalStyle $isB2B />
            <RouterProvider router={router} />
        </ThemeProvider>
    )
}

export default App
