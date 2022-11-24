import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import { BrowserRouter } from 'react-router-dom';
import axios from "axios";
import Dashboard from "./container/Dashbord";


function App() {

  axios.defaults.baseURL='http://localhost:8080';

  return (
    <div className="App"> 
    <BrowserRouter>
      <Dashboard />
    </BrowserRouter>
    </div>
  );
}

export default App;
