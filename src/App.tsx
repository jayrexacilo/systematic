import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import SignIn from './components/Auth/SignIn';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route path="/signin"><SignIn/></Route>
      </Switch>
    </Router>
  );
}

export default App;
