
import { Col, Container, Row } from 'react-bootstrap'
import './App.css'
import MyNavbar from './components/myNavbar'
import Articles from './components/Articles'


function App() {

  return (
    <>
      <div className="bg-dark">
        <MyNavbar />

        <Container>
          <Row>
            <Col xs={12}><Articles /></Col>
          </Row>
        </Container>
      </div>
    </>

  )
}

export default App
