import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';  

function Home() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>HOME</h1>
        </Col>
      </Row>
      <Row>
        <Col><Link to="/signin">Signin</Link></Col>
      </Row>
    </Container>
  );
}

export default Home;
