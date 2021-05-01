import { ComponentProps } from 'react';
import { FormGroup, FormFeedback, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';

interface IFormInputProps {
  formData: {
    inputValidation: {
      email: boolean,
      password: boolean
    },
    handleFormInput: (name: string, value: string) => void,
    inputName: string,
    placeholder: string,
    inputType: ComponentProps<typeof Input>['type'],
    errFeedback: string
  }
}

function FormInput(props: IFormInputProps) {
  const { inputValidation, handleFormInput, inputName, placeholder, inputType, errFeedback } = props.formData;

  return (
    <FormGroup className={inputValidation.email ? '' : 'has-danger' }>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <i className="ni ni-email-83" />
          </InputGroupText>
        </InputGroupAddon>
        <Input className={inputValidation.email ? '' : 'is-invalid' } placeholder={placeholder} type={inputType} name={inputName} onChange={(e) => handleFormInput(e.target.name, e.target.value)}/>
      </InputGroup>
      <FormFeedback className={inputValidation.email ? '' : 'd-block' }>{errFeedback}</FormFeedback>
    </FormGroup>
  );
}

export default FormInput;
