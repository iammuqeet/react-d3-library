import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  links: [],
  data: [],
  allLinks: [],
  allData: [],
}

const slice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    UPDATE_COTACTS: (companies, action) => {
      const { links, data } = action.payload
      return {
        links,
        data,
        allLinks: links,
        allData: data,
      }
    },
    FILTER_COTACTS: (companies, action) => {
      const { links, data } = action.payload
      const { allLinks, allData } = companies

      return {
        links,
        data,
        allLinks,
        allData,
      }
    },
    CLEAR_COTACTS: (companies, action) => {
      const { allLinks, allData } = companies
      return {
        links: allLinks,
        data: allData,
        allLinks,
        allData,
      }
    },
  },
})

export const { UPDATE_COTACTS, FILTER_COTACTS, CLEAR_COTACTS } = slice.actions
export default slice.reducer
