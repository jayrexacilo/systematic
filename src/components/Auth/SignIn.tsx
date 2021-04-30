import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Container, Row, Col, Button, Card, CardBody, CardHeader, Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { SignInAction} from '../../redux/actions/Auth/SignInActions';

import githubLogo from '../../assets/img/icons/common/github.svg';
import googleLogo from '../../assets/img/icons/common/google.svg';

function SignIn() {
  const dispatch = useDispatch();
  const [ user, setUser ] = useState({email: '', password: ''});
  const handleFormInput = (name: string, value: string) => setUser({...user, [name]: value});
  const handleSignIn = () => dispatch(SignInAction({email: user.email, password: user.password}));

  return (
    <Container>
      <Row className="justify-content-center">
        <Col className="col-md-7 col-lg-5 mt-5">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="px-lg-5 py-lg-55">
              <div className="text-muted text-center mt-2 mb-3">
                <small>Sign In with credentials</small>
              </div>
              <Form>
                <FormGroup>
                <InputGroup className="mb-4">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Email" type="email" name="email" onChange={(e) => handleFormInput(e.target.name, e.target.value)}/>
                </InputGroup>
              </FormGroup>
                <FormGroup>
                <InputGroup className="mb-4">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Password" type="password" name="password" onChange={(e) => handleFormInput(e.target.name, e.target.value)}/>
                </InputGroup>
              </FormGroup>
              <div className="custom-control custom-checkbox mb-3">
                <input
                  className="custom-control-input"
                  id="remember_me"
                  type="checkbox"
                />
                <label className="custom-control-label" htmlFor="remember_me"><span className="text-muted">Remember me</span></label>
              </div>
              <div className="text-center">
                <Button className="my-4 btn" color="primary" type="button" onClick={() => handleSignIn()}>Sign In</Button>
              </div>
              </Form>
            </CardHeader>
            <CardBody className="bg-transparent">
              <div className="text-center text-muted mb-4">
                <small>Or sign in with</small>
              </div>
              <div className="btn-wrapper text-center">
                <Link className="btn-neutral btn-icon btn btn-default" to="#">
                  <span className="btn-inner--icon">
                    <img alt="..." src={githubLogo}/>
                  </span>
                  <span className="btn-inner--text">Github</span>
                </Link>
                <Link className="btn-neutral btn-icon btn btn-default" to="#">
                  <span className="btn-inner--icon">
                    <img alt="..." src={googleLogo} />
                  </span>
                  <span className="btn-inner--text">Google</span>
                </Link>
              </div>
            </CardBody>
          </Card>
          <Row className="mt-3">
            <Col><Link to="#" className="text-light"><small>Forgot password?</small></Link></Col>
            <Col className="text-right"><Link to="#" className="text-light"><small>Create new account</small></Link></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default SignIn;
