import { Route } from "react-router-dom"
import { Switch } from "react-router-dom"
import { Home } from "../pages/Home"
import { Login } from "../pages/Login"
import { Cart } from "../pages/Cart"
import { ProductPage} from "../pages/Product"
import { SignUp } from "../pages/SignUp"
import { Profile } from "../pages/Profile"

const Routes = () =>{
    return(
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route exact path="/signup">
                <SignUp/>
            </Route>
            <Route exact path="/cart">
                < Cart />
            </Route>
            <Route exact path="/product/:id">
                <ProductPage/> 
            </Route>
            <Route exact path="/profile">
                < Profile />
            </Route>
      </Switch>
    )
}
export default Routes