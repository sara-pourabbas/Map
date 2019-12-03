import React,{Component} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Views/Home";
//import './App.scss';

class App extends Component{
    render(){
        return (
            <Router>
                <Switch>
                    <Route path="/" name="Home" component={Home} exact/>
                </Switch>
            </Router>
        );
    }
}

export default App;