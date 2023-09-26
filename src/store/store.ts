import { configureStore } from '@reduxjs/toolkit'
import { currencySlice } from './states/currency.state'

export interface AppStore {
    currency: {
        name: string
    }
}

export const store = configureStore<AppStore>({ reducer: {
    currency: currencySlice.reducer,
} })
