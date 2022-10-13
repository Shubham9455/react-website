import './App.css';
import Navbar from './componants/Navbar';
import { BrowserRouter as Router} from "react-router-dom";
import { Switch, Route} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
