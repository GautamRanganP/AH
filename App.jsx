import './App.css'
import { Route,BrowserRouter,Routes  } from 'react-router-dom'
import Layout from './pages/Layout/Layout'
import Home from './pages/Home/Home'
import Admin from './pages/Admin/Admin'
import NoPage from './pages/NoPage/NoPage'
import ProductForm from './components/ProductForm'
import { GlobalStateProvider } from './store/store'
import UserTable from './components/UserTable'
import Login from './components/Login'

function App() {
  return (
    <GlobalStateProvider>
     <BrowserRouter>
     <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="admin" element={<Admin />} />
          <Route path="addform" element={<ProductForm mode = {"ADD"} />} />
          <Route path="editform/:id" element={<ProductForm mode = {"EDIT"} />} />
          <Route path="user" element={<UserTable />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NoPage />} /> 
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
     </Routes>
     </BrowserRouter>
     </GlobalStateProvider>
  )
}

export default App
