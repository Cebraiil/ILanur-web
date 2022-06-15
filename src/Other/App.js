import AppBar from "./AppBar";
import '../Content/App.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Views/Home";
import Quran from "../Views/Quran/Quran";
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
  return (
      <Router>
        <div className="App" >
          <AppBar className="Appbar"/>
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/quran">
                <Quran />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
  );
}

export default App;
