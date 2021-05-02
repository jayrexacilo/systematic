import { Link } from 'react-router-dom';
import { Container, Row, Col,  Card, CardBody, CardHeader } from 'reactstrap';

import SignInForm from '../../components/Auth/SignIn/SignInForm';
import SignInOAuth from '../../components/Auth/SignIn/SignInOAuth';

function SignIn() {

  return (
    <Container>
      <Row className="justify-content-center">
        <Col className="col-md-7 col-lg-5 mt-5">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="px-lg-5 py-lg-55">
              <div className="text-muted text-center mt-2 mb-3">
                <small>Sign In with credentials</small>
              </div>
              <SignInForm />
            </CardHeader>
            <CardBody className="bg-transparent">
              <SignInOAuth />
            </CardBody>
          </Card>
          <Row className="mt-3">
            <Col><Link to="#" className="text-light"><small>Forgot password?</small></Link></Col>
            <Col className="text-right"><Link to="/signup" className="text-light"><small>Create new account</small></Link></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default SignIn;
