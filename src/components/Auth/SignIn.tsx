import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { SignInAction} from '../../redux/actions/Auth/SignInActions';
import { UserType } from '../../redux/actions/Auth/SignInActionTypes';
import { RootStore } from '../../redux/Store';

function SignIn() {
  const dispatch = useDispatch();
  const signInState = useSelector((state: RootStore) => state.signin);
  const handleSignIn = (user: UserType) => dispatch(SignInAction(user));

  console.log('state => ', signInState);

  return (
    <Container>
      <Row>
        <Col>
          <h1>Sign In</h1>
          <Button onClick={() => handleSignIn({user: {email: 'alksfjalksjf', password: 'asflaksjfas'}})}>Sign In</Button>
        </Col>
      </Row>
      <Row>
        <Col><Link to="/">Home</Link></Col>
      </Row>
    </Container>
  );
}

export default SignIn;
