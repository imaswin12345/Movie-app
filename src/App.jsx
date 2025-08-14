import Home from './pages/Home'
import './css/App.css'
import { Routes,Route } from 'react-router-dom'
import Favorites from './pages/Favorites'
import NavBaR from './components/NavBaR'


function App() {



  return (
    <div >
      <NavBaR/>
       <main className='main-content'>

      <Routes>
        <Route path={'/'} element={<Home/>} />
        <Route path={'/favorites'} element={<Favorites/>} />
        
      </Routes>

    </main>
    </div>
  )
}



export default App
