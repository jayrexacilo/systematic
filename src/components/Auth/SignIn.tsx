import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Card, CardBody, CardHeader, Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { SignInAction} from '../../redux/actions/Auth/SignInActions';
import { UserType } from '../../redux/actions/Auth/SignInActionTypes';
import { RootStore } from '../../redux/Store';

import githubLogo from '../../assets/img/icons/common/github.svg';
import googleLogo from '../../assets/img/icons/common/google.svg';

function SignIn() {
  const dispatch = useDispatch();
  const signInState = useSelector((state: RootStore) => state.signin);
  const handleSignIn = (user: UserType) => dispatch(SignInAction(user));

  console.log('state => ', signInState);

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
                  <Input placeholder="Email" type="email" />
                </InputGroup>
              </FormGroup>
                <FormGroup>
                <InputGroup className="mb-4">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Password" type="password" />
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
                <Button className="my-4 btn" color="primary" type="button" onClick={() => handleSignIn({user: { email: "aklsdalskdjas", password: "alskdjals"}})}>Sign In</Button>
              </div>
              </Form>
            </CardHeader>
            <CardBody className="bg-transparent">
              <div className="text-center text-muted mb-4">
                <small>Or sign in with</small>
              </div>
              <div className="btn-wrapper text-center">
                <a className="btn-neutral btn-icon btn btn-default" href="#">
                  <span className="btn-inner--icon">
                    <img alt="..." src={githubLogo}/>
                  </span>
                  <span className="btn-inner--text">Github</span>
                </a>
                <a className="btn-neutral btn-icon btn btn-default" href="#">
                  <span className="btn-inner--icon">
                    <img alt="..." src={googleLogo} />
                  </span>
                  <span className="btn-inner--text">Google</span>
                </a>
              </div>
            </CardBody>
          </Card>
          <Row className="mt-3">
            <Col><a href="#" className="text-light"><small>Forgot password?</small></a></Col>
            <Col className="text-right"><a href="#" className="text-light"><small>Create new account</small></a></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default SignIn;
