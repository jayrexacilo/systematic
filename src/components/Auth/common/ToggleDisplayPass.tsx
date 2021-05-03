
interface IProps {
  toggleShow: () => void,
  isShowPass: boolean
}

function ToggleDisplayPass(props: IProps) {

  return (
    <div className="d-flex flex-row-reverse">
      <a href="#toggleDisplayPass" onClick={props.toggleShow} className=""><small>{props.isShowPass ? 'Hide' : 'Show'} password</small></a>
    </div>
  );
}

export default ToggleDisplayPass;
