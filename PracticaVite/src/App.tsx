import './App.css'
import { Routes, Route } from 'react-router-dom'
import Consulta from './Pages/Getapi'
import ConsultaTabla from './Pages/GetapiTable'
import Menu from './Pages/Menu'
import Curso from './Pages/CreacionCurso'





function App() {
  return (
    <>
      
      <Routes>
        
        <Route path='/' element={<Menu/>}/>
        <Route path='/CrearCurso' element={<Curso/>}/>
        <Route path='/BuscarAlumno' element={<Consulta/>}/>
        <Route path='/BuscarAlumnoTable' element={<Consulta/>}/> 
      </Routes> 
    </>
  )
}

export default App
