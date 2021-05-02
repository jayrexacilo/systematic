import { Link } from 'react-router-dom';
import { Container, Row, Col,  Card, CardBody, CardHeader } from 'reactstrap';

import SignUpForm from '../../components/Auth/SignUp/SignUpForm';
import SignUpOAth from '../../components/Auth/SignUp/SignUpOAuth';

function SignUp() {

  return (
    <Container>
      <Row className="justify-content-center">
        <Col className="col-md-7 col-lg-5 mt-5">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="px-lg-5 py-lg-55">
              <SignUpForm />
            </CardHeader>
            <CardBody className="bg-transparent">
              <SignUpOAth />
            </CardBody>
          </Card>
          <Row className="mt-3">
            <Col className="text-right">Already have an account? Please <Link to="/signin" className="text-primary">Sign In</Link></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default SignUp;
