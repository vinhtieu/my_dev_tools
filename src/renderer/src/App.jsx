import { Sidebar } from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import OrderPage from './Pages/Order'
import JsonEditorPage from './Pages/Json-Editor'

function App() {
  return (
    <div className="grid w-screen h-screen grid-cols-[275px_1fr] overflow-hidden">
      <BrowserRouter>
        <Sidebar></Sidebar>
        <Routes>
          <Route path="/json-editor" element={<JsonEditorPage />}></Route>
          <Route path="/order" element={<OrderPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
