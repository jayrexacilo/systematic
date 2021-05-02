import { Link } from 'react-router-dom';

import githubLogo from '../../../assets/img/icons/common/github.svg';
import googleLogo from '../../../assets/img/icons/common/google.svg';

function SignUpOAth() {
  return (
    <>
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
    </>
  );
}

export default SignUpOAth;
