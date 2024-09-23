/* eslint-disable no-unused-vars */
import React, { Suspense, useState } from 'react'
import {HashRouter, Route, Routes} from 'react-router-dom'

import './scss/style.scss'


const Login = React.lazy(() => import('./views/pages/login/Login'))

function App() {
  const [count, setCount] = useState(0)

  return (
    <HashRouter>
      <Suspense>
        <Routes>
          <Route exact path='/' name="Login" element={<Login/>}/>
          <Route/>
          <Route/>
          <Route/>
        </Routes>
      </Suspense>
    </HashRouter>
  )
}

export default App
