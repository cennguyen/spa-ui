import { createSlice } from '@reduxjs/toolkit'
import { checkViewPort } from '../../services/Browser'


const initialState = {
    view: checkViewPort(),
    width: window.innerWidth,
    height: window.innerHeight,
}

export const Layout = createSlice({
    name: 'Layout',
    initialState,
    reducers: {
        setView: (state, { payload }) => {
            state.view = payload
        },
        setViewportDimensions: (state, { payload }) => {
            state.width = payload.width
            state.height = payload.height
        },
    },
})

export const { setTemplate, setViewportDimensions, setView } = Layout.actions

export default Layout.reducer