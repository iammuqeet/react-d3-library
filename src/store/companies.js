import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  links: [],
  data: [],
}

const slice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    UPDATE_COMPANIES: (companies, action) => action.payload,
  },
})

export const { UPDATE_COMPANIES } = slice.actions
export default slice.reducer
