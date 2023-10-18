import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [
    { title: 'Json Editor', active: true, path: '/json-editor' },
    { title: 'Bán Hàng', active: false, path: '/order' },
    { title: 'Khách Hàng', active: false, path: '/' },
    { title: 'Hàng Hóa', active: false, path: '/' },
    { title: 'Cài Đặt', active: false, path: '/' }
  ]
}

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setActive: (state, action) => {
      const selectedItem = action.payload
      const selectedIndex = state.items.findIndex((item) => item.title === selectedItem)

      state.items[selectedIndex].active = true
      state.items.forEach((item) => {
        if (item.title !== selectedItem) {
          item.active = false
        }
      })
    }
  }
})

export const { setActive } = sidebarSlice.actions
export default sidebarSlice.reducer
