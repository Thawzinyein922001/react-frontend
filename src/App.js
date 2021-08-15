import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
//import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        <div>
          <HeaderComponent />
          <div className="container">
            <switch>
              <Route path="/" exact component={ListEmployeeComponent}></Route>
              <Route path="/employees" component={ListEmployeeComponent}></Route>
              {/*step1*/}
              <Route path="/add-employee/:id" component={CreateEmployeeComponent}></Route>
              {/*<Route path="/update-employee/:id" component={UpdateEmployeeComponent}></Route>*/}
              <Route path="/view-employee/:id" component={ViewEmployeeComponent}></Route>
            </switch>
          </div>
          <FooterComponent />
        </div>
      </Router>
    </div>
  );
}

export default App;
