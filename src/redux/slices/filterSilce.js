import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categoryId: 0,
  sort: '-rating',
  currentPage: 0,
  totalPages: 3,
  searchValue: ''
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId = action.payload
    },
    setSortType: (state, action) => {
      state.sort = action.payload
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
    },
    setTotalPages: (state, action) => {
      state.totalPages   = action.payload
    },
    setSearchValue: (state, action) => {
      state.searchValue   = action.payload
    }
  }
})

export const { setCategoryId, setSortType, setCurrentPage, setTotalPages, setSearchValue } = filterSlice.actions

export default filterSlice.reducer