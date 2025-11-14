import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./App.css";
import ContDerecho from "./components/ContDerecho";
import ContIzquierdo from "./components/ContIzquierdo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Header></Header>
        </Col>
      </Row>
      <Row>
        <Col>
          <Menu />
        </Col>
      </Row>
      <main>
        <Row>
          <Col>
            <ContIzquierdo />
          </Col>
          <Col>
            <ContDerecho />
          </Col>
        </Row>
      </main>
      <Row>
        <Col>
          <Footer></Footer>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
