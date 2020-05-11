import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Directory from "./containers/EmployeeDirectory"
import Navbar from "./components/Shared/Navbar"
import Home from "./containers/Home"

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Route exact path="/" component={Home}/>
        <Route exact path="/directory" component={Directory}/>
      </Router>
    </div>
  );
}

export default App;
