import { Input } from 'reactstrap';

interface IProps {
  idName: string,
  label: string
}

function FormCheckbox(props: IProps) {
  const { idName, label } = props;
  return (
    <div className="custom-control custom-checkbox mb-3">
      <Input
        className="custom-control-input"
        id={idName}
        type="checkbox"
      />
      <label className="custom-control-label" htmlFor={idName}><span className="text-muted">{label}</span></label>
    </div>
  );
}

export default FormCheckbox;
