import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import { IsAuthenticated } from '../configs/Auth';
import ToDoPages from '../pages/ToDoPages';
import { Login } from './Login';

const PrivateRoute = ({ component: Component, ...rest}) => (
  <Route 
    {...rest}
    render={props =>
      IsAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={ { pathname: "/", state: { from: props.location} }} />
      )
    }
  />
);

function AppRoutes () {
  
  
  return(
    <BrowserRouter>
        <Route path="/" exact component={Login} />
        <PrivateRoute path="/index" exact component={ToDoPages} />
        
    </BrowserRouter>
  )
  
}

export default AppRoutes;