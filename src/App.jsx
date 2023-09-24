import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import Nav from './Components/Nav/Nav'

function App() {
  return (
   <div className='max-w-7xl mx-auto'>
    <Nav></Nav>
    <Outlet></Outlet>
    <Footer></Footer>
   </div>
  )
}

export default App
