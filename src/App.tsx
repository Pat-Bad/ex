
import { Container } from 'react-bootstrap'
import './App.css'
import MyNavbar from './components/myNavbar'
import Articles from './components/Articles'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Details from './components/Detail'


function App() {

  return (
    <BrowserRouter>
      <>
        <div className="bg-dark">
          <MyNavbar />



          <Container ><Routes><Route path='/:id' element={<Details />}></Route>

            <Route path="/" element={<Articles />}></Route></Routes></Container>

        </div>
      </>
    </BrowserRouter>

  )
}

export default App
