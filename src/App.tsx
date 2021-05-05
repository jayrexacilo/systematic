import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import SignIn from './layouts/Auth/SignIn';
import SignUp from './layouts/Auth/SignUp';
import Admin from './layouts/Admin/MainLayout';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route path="/signin"><SignIn/></Route>
        <Route path="/signup"><SignUp/></Route>
        <Route path="/admin"><Admin/></Route>
      </Switch>
    </Router>
  );
}

export default App;
