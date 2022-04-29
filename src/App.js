
import './App.css';
import RegistrationForm from './components/registrationForm';
import "bootstrap/dist/css/bootstrap.css";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
       <Router>
        <Navbar />
        <RegistrationForm/>
      </Router>
      
     
    </div>
  );
}

export default App;
