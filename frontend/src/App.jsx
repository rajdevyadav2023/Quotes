
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Dreams from './pages/dreams/Dreams'
import Success from './pages/success/Success'
import Positive from './pages/positive/Positive'
import Home from './pages/home/Home'
import Motivational from './pages/motivational/Motivational'
import { Routes,Route } from 'react-router-dom'
function App() {
  

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/motivational' element={<Motivational/>} />
        <Route path='/positive' element={<Positive/>}/>
        <Route path='/success' element={ <Success/>}/>
        <Route path='/dreams' element={<Dreams/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
