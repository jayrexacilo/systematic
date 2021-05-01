import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Container, Row, Col, Button, Card, CardBody, CardHeader, Form } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { SignInAction } from '../../redux/actions/Auth/SignInActions';
import validator from 'validator';

import FormInput from '../../components/Auth/common/FormInput'; 
import FormCheckbox from '../../components/Auth/common/FormCheckbox'; 

import githubLogo from '../../assets/img/icons/common/github.svg';
import googleLogo from '../../assets/img/icons/common/google.svg';

function SignIn() {
  const dispatch = useDispatch();
  const [ user, setUser ] = useState({email: '', password: ''});
  const [ inputValidation, setInputValidation ] = useState({email: true, password: true});
  const handleFormInput = (name: string, value: string) => {
    setInputValidation({
      email: validator.isEmail(user.email) && !validator.isEmpty(user.email),
      password: validator.isLength(user.password, {min: 6, max: 16}) && !validator.isEmpty(user.password)
    });
    setUser({...user, [name]: value});
  };
  const handleSignIn = () => {
    setInputValidation({
      email: validator.isEmail(user.email) && !validator.isEmpty(user.email),
      password: validator.isLength(user.password, {min: 6, max: 16}) && !validator.isEmpty(user.password)
    });
    dispatch(SignInAction({email: user.email, password: user.password}));
  };

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
                <FormInput inputData={{inputValidation, handleFormInput, inputName: 'email', inputType: 'email', placeholder: 'Email', errFeedback: 'Please enter valid email', icon: 'ni-email-83'}}/>
                <FormInput inputData={{inputValidation, handleFormInput, inputName: 'password', inputType: 'password', placeholder: 'Password', errFeedback: 'Password should be min 6 and max 16', icon: 'ni-lock-circle-open'}}/>
                <FormCheckbox idName="remember_me" label="Remember me" />
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
            <Col className="text-right"><Link to="/signup" className="text-light"><small>Create new account</small></Link></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default SignIn;
