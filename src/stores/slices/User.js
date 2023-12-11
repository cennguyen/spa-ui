import { createSlice } from '@reduxjs/toolkit'
import pick from 'lodash/pick'

const initialState = {
    token: '',
    loginId: '',
    email: '',
    fullName: '',
    mode: '',
    type: '',
    betCredit: '',
    outstanding: '',
    currency: '',
    currencyUnit: 1,
    currentTierId: 1,
    message: '',
    isRefresh: false,
    lang: 'en',
    isLoggedIn: false,
    sumAnnouncement: 0,
    totalMessage: 0,
}

export const User = createSlice({
    name: 'User',
    initialState,
    reducers: {
        setUser: (state, { payload }) => {
            const values = pick(payload, Object.keys(initialState)) || {}
            const newState = payload.auth
                ? { ...values, isLoggedIn: payload.auth }
                : values
            return {
                ...state,
                ...newState,
            }
        },
        resetSession: () => {
            return { ...initialState }
        },
    },
})

export const { setUser, resetSession } = User.actions

export default User.reducer
