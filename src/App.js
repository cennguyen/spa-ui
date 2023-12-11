import { ThemeProvider } from 'styled-components'
import getTheme from './app/styles'
import { RouterProvider } from 'react-router-dom'
import { useCallback, useEffect, useRef } from 'react'
import debounce from 'lodash'
import { useDispatch } from 'react-redux'
import GlobalStyle from './app/styles/GlobalStyled/GlobalStyle'
import { useGlobalConfig } from './app/context/Global'
import router from './services/routers'

const App = () => {
    const { theme } = useGlobalConfig();
    // const dispatch = useDispatch()

    // const debounceRef = useRef(
    //     debounce(() => {
    //         dispatch(setMobile(window.innerWidth <= 768))
    //         dispatch(
    //             setViewportDimensions({
    //                 height: window.innerHeight,
    //                 width: window.innerWidth,
    //             }),
    //         )
    //     }, 500),
    // )

    // const handleSize = useCallback(() => debounceRef.current(), [])

    // useEffect(() => {
    //     handleSize()
    //     window.addEventListener('resize', handleSize)
    //     return () => {
    //         window.removeEventListener('resize', handleSize)
    //     }
    // }, [handleSize])

    return (
        <ThemeProvider theme={{  ...getTheme(theme) }}>
            <GlobalStyle $isB2B />
            <RouterProvider router={router} />
        </ThemeProvider>
    )
}

export default App
