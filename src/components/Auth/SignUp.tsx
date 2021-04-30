import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Container, Row, Col, Button, Card, CardBody, CardHeader, Form, FormGroup, FormFeedback, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
//import { useDispatch } from 'react-redux';
//import { SignInAction} from '../../redux/actions/Auth/SignInActions';
import validator from 'validator';

import githubLogo from '../../assets/img/icons/common/github.svg';
import googleLogo from '../../assets/img/icons/common/google.svg';

function SignUp() {
  //const dispatch = useDispatch();
  const [ user, setUser ] = useState({name: '', email: '', password: ''});
  const [ inputValidation, setInputValidation ] = useState({name: true, email: true, password: true});
  const handleFormInput = (name: string, value: string) => {
    setInputValidation({
      name: !validator.isEmpty(user.name),
      email: validator.isEmail(user.email) && !validator.isEmpty(user.email),
      password: validator.isLength(user.password, {min: 6, max: 16}) && !validator.isEmpty(user.password)
    });
    setUser({...user, [name]: value});
  };
  const handleSignUp = () => {
    setInputValidation({
      name: !validator.isEmpty(user.name),
      email: validator.isEmail(user.email) && !validator.isEmpty(user.email),
      password: validator.isLength(user.password, {min: 6, max: 16}) && !validator.isEmpty(user.password)
    });
    //dispatch(SignInAction({email: user.email, password: user.password}));
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col className="col-md-7 col-lg-5 mt-5">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="px-lg-5 py-lg-55">
              <div className="text-muted text-center mt-2 mb-3">
                <small>Sign Up with credentials</small>
              </div>
              <Form>
                <FormGroup className={inputValidation.name ? '' : 'has-danger' }>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-circle-08" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input className={inputValidation.name ? '' : 'is-invalid' } placeholder="Name" type="text" name="name" onChange={(e) => handleFormInput(e.target.name, e.target.value)}/>
                  </InputGroup>
                  <FormFeedback className={inputValidation.name ? '' : 'd-block' }>Please enter name</FormFeedback>
                </FormGroup>
                <FormGroup className={inputValidation.email ? '' : 'has-danger' }>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input className={inputValidation.email ? '' : 'is-invalid' } placeholder="Email" type="email" name="email" onChange={(e) => handleFormInput(e.target.name, e.target.value)}/>
                  </InputGroup>
                  <FormFeedback className={inputValidation.email ? '' : 'd-block' }>Please enter a valid email</FormFeedback>
                </FormGroup>
                <FormGroup className={inputValidation.password ? '' : 'has-danger' }>
                  <InputGroup className="mb-4">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input className={inputValidation.password ? '' : 'is-invalid' } placeholder="Password" type="password" name="password" onChange={(e) => handleFormInput(e.target.name, e.target.value)}/>
                  </InputGroup>
                  <FormFeedback className={inputValidation.password ? '' : 'd-block' }>Password should be min 6 and max 16</FormFeedback>
                </FormGroup>
                <div className="custom-control custom-checkbox mb-3">
                  <input
                    className="custom-control-input"
                    id="privacy_policy"
                    type="checkbox"
                  />
                  <label className="custom-control-label" htmlFor="privacy_policy"><span className="text-muted">I agree with the Privacy Policy</span></label>
                </div>
                <div className="text-center">
                  <Button className="my-4 btn" color="primary" type="button" onClick={() => handleSignUp()}>Sign Up</Button>
                </div>
              </Form>
            </CardHeader>
            <CardBody className="bg-transparent">
              <div className="text-center text-muted mb-4">
                <small>Or sign up with</small>
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
            <Col className="text-right">Already have an account? Please <Link to="/signin" className="text-primary">Sign In</Link></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default SignUp;
