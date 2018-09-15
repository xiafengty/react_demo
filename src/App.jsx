import React ,{Component} from "react";
import {Route,Switch,HashRouter as Router} from "react-router-dom";
import InterLayer from "./components/InterLayer/InterLayer";
import NavHome from "./containers/NavHome/NavHome";
class App extends  Component{
  render(){
    return(
      <div>
        <Router>
          <Switch>
            <Route path="/navhome" component={NavHome} />
            <Route  component={InterLayer}/>
          </Switch>
        </Router>
      </div>
    )
  }
}
export default App;