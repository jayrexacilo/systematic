import { useState } from 'react';
import {    Button, Form } from 'reactstrap';
//import { useDispatch } from 'react-redux';
//import { SignInAction} from '../../redux/actions/Auth/SignInActions';
import validator from 'validator';

import FormInput from '../../../components/Auth/common/FormInput'; 
import FormCheckbox from '../../../components/Auth/common/FormCheckbox'; 

function SignUpFrom() {
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
    <>
      <div className="text-muted text-center mt-2 mb-3">
        <small>Sign Up with credentials</small>
      </div>
      <Form>
        <FormInput inputData={{isValid: inputValidation.name, handleFormInput, inputName: 'name', inputType: 'text', placeholder: 'Name', errFeedback: 'Please enter name', icon: 'ni-circle-08'}}/>
        <FormInput inputData={{isValid: inputValidation.email, handleFormInput, inputName: 'email', inputType: 'email', placeholder: 'Email', errFeedback: 'Please enter valid email', icon: 'ni-email-83'}}/>
        <FormInput inputData={{isValid: inputValidation.password, handleFormInput, inputName: 'password', inputType: 'password', placeholder: 'Password', errFeedback: 'Password should be min 6 and max 16', icon: 'ni-lock-circle-open'}}/>
        <FormCheckbox idName="privacy_policy" label="I agree with the Privacy Policy" />
        <div className="text-center">
          <Button className="my-4 btn" color="primary" type="button" onClick={() => handleSignUp()}>Sign Up</Button>
        </div>
      </Form>
    </>
  );
}

export default SignUpFrom;
