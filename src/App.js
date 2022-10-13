import './App.css';
import Navbar from './componants/Navbar';
import { BrowserRouter as Router} from "react-router-dom";
import { Switch, Route} from "react-router-dom";
import Home from "./componants/pages/Home";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
