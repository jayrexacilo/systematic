import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RootStore from './redux/Store';
import { Provider } from 'react-redux';

import './index.css';
import "./assets/plugins/nucleo/css/nucleo.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import './assets/css/argon-dashboard-react.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';


ReactDOM.render(
  <Provider store={RootStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
