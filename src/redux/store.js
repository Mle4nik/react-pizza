import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/filterSilce'

export default configureStore({
  reducer: {
    filter
  }
})