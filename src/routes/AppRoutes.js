import {BrowserRouter as Router,
    Switch,
    Route,} from "react-router-dom"
import UserProvider from "../context/User/userProvider";

import Login from "../views/Login";
import Register from "../views/Register";
import DashBoardRoutes from "./DashBoardRoutes";

const AppRoutes=()=>
{
    return(
    <Router>
        <UserProvider>
            <Switch>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/register" component={Register}/>
                    <Route path="/" component={DashBoardRoutes} />    
            </Switch>
        </UserProvider>
    </Router>
    )
}

export default AppRoutes