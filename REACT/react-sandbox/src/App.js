import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import Layout from './pages/Layout';
import Home from './pages/Home';
import Usuarios from './pages/Usuarios';
import Mensajes from './pages/Mensajes';
import NoPage from './pages/NoPage';
import Timer from './components/Timer';
import Component1 from './components/Component1';
import Ref from './components/Ref';
import Main from './components/Main';



function App() {

  return (
      <div className='wrapper-app'>
        {true && <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path='usuarios' element={<Usuarios/>}/>
              <Route path='mensajes' element={<Mensajes/>}/>
              <Route path='*' element={<NoPage/>}/>
            </Route>
          </Routes>
        </BrowserRouter>}

        {false && <Timer />}
        {false && <Component1/>}
        {false && <Ref />}
        {false && <Main />}
        
{/*     <div>
          <Button variant="outlined" color="primary">Aceptar</Button>
        </div>
        <div>
          <TextField label='Caja de texto básica'/>
        </div>
        <div>
          <TextField placeholder='Este es el placeholder' label='Caja de texto básica'/>
        </div> */}
      </div>   
  )
}

export default App;
