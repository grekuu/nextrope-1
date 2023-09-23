import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

interface FormState {
    data: Array<{ description: string; time: string }>
}

const initialState: FormState = {
    data: [],
}

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        addData: (state, action: PayloadAction<{ description: string; time: string }>) => {
            state.data.push(action.payload)
        },
    },
})

export const { addData } = formSlice.actions
export const selectData = (state: RootState) => state.form.data

export default formSlice.reducer
