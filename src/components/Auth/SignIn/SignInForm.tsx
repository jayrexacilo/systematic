import { useState } from 'react';
import {    Button, Form } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { SignInAction } from '../../../redux/actions/Auth/SignInActions';
import validator from 'validator';
import FormInput from '../common/FormInput'; 
import FormCheckbox from '../common/FormCheckbox'; 
import ToggleDisplayPass from '../common/ToggleDisplayPass';

function SignInForm() {
  const dispatch = useDispatch();
  const [ user, setUser ] = useState({email: '', password: '', isShowPass: false});
  const [ inputValidation, setInputValidation ] = useState({email: true, password: true});
  const handleFormInput = (name: string, value: string) => {
    setInputValidation({
      email: name === 'email' ? validator.isEmail(user.email) && !validator.isEmpty(user.email) : inputValidation.email,
      password: name === 'password' ? validator.isLength(user.password, {min: 6, max: 16}) && !validator.isEmpty(user.password) : inputValidation.password
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
    <Form>
      <FormInput inputData={{isValid: inputValidation.email, handleFormInput, inputName: 'email', inputType: 'email', placeholder: 'Email', errFeedback: 'Please enter valid email', icon: 'ni-email-83'}}/>
      <FormInput inputData={{isValid: inputValidation.password, handleFormInput, inputName: 'password', inputType: user.isShowPass ? 'text' : 'password', placeholder: 'Password', errFeedback: 'Password should be min 6 and max 16', icon: 'ni-lock-circle-open'}}/>
      <ToggleDisplayPass toggleShow={(): void => setUser({...user, isShowPass: !user.isShowPass})} isShowPass={user.isShowPass}/>
      <FormCheckbox idName="remember_me" label="Remember me" />
      <div className="text-center">
        <Button className="my-4 btn" color="primary" type="button" onClick={() => handleSignIn()}>Sign In</Button>
      </div>
    </Form>
  );
}

export default SignInForm;
