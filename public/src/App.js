import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import { Chat } from './pages/Chat';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { SetAvatar } from './pages/SetAvatar';


export const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Chat/>}/>
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/setAvatar' element={<SetAvatar/>} />
    </Routes>
    </BrowserRouter>
  )
}

