
import { Container } from 'react-bootstrap'
import './App.css'
import MyNavbar from './components/myNavbar'
import Articles from './components/Articles'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {

  return (
    <>
      <div className="bg-dark">
        <MyNavbar />



        <Container ><Articles /></Container>

      </div>
    </>

  )
}

export default App
