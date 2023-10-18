import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
  config: {}
}

const jsonEditorSlice = createSlice({
  name: 'jsonEditor',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload
    }
  }
})

export const { setData } = jsonEditorSlice.actions

export default jsonEditorSlice.reducer
