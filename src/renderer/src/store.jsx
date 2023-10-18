import { configureStore } from '@reduxjs/toolkit'

import sidebarReducer from './features/sidebar/sidebarSlice'
import jsonEditorSlice from './features/jsonEditor/jsonEditorSlice'

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    jsonEditor: jsonEditorSlice
  }
})
