import { useCallback, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
// import { getLocale } from 'i18n/helpers'
import { GlobalProvider } from './app/context/Global'
import App from './App'
import { getThemeName } from './app/styles'
import { LoaderStyled } from './components/Loader'
import Spinner from './components/LoaderStyled'
import { useGetTemplateQuery } from './stores/RTK/layoutTemplateService'
import store from './stores/main'

const Root = () => {
  const SKIN_DEFAULT = 'default'
  const { data, isLoading, isError } = useGetTemplateQuery(SKIN_DEFAULT);
  const themeName = data?.globalAttribute?.themeName;
  const [theme, setTheme] = useState('default');

  useEffect(() => {
    if (themeName) {
      setTheme(themeName);
    }
  }, [themeName]);

  const toggleTheme = useCallback(
    () =>
      setTheme((prevTheme) => {
        if (!['default', 'dark'].includes(theme)) {
          return prevTheme === theme
            ? getThemeName(theme, true)
            : theme;
        }
        return prevTheme === 'default' ? 'dark' : 'default'
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  if (isLoading || isError) {
    return (
      <LoaderStyled>
        <Spinner strokeColor='FF5500_1￼' strokeWidth={1} />
      </LoaderStyled>
    )
  }

  return (
    <GlobalProvider
      value={{
        configs: data?.globalAttribute,
        periods: data?.periods,
        theme,
        toggleTheme,
      }}
    >
      <App />
    </GlobalProvider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <Root />
  </Provider>,
)