const { Switch, Route } = require("react-router-dom")
import Home from "./Home";
import UsersComponent from "./UsersComponent";
import LoginComponent from "./LoginComponent";

var RouterComponent = () => {
    return <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/users" component={UsersComponent}/>
    <Route path="/login" component={LoginComponent}/>
    </Switch>
};

export default RouterComponent;
