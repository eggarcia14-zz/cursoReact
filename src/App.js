import React, { Component } from 'react';
import { BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import Counters from './componets/counters';
import userData from './componets/userData';
import Nav from './componets/nav';
import Form from "./componets/form.jsx";

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      Auth: true // Dar acceso a ruta /user
    };
    console.log('App - Constrctor');
  }

  componetDidMount(){
    // ajax call
    console.log('App - Mounted');

  }

  render(){
    console.log('App - rendering');
    const PrivateRoute = ({ component:Component, ...rest }) => {
      return(<Route {...rest} render = { (props) => {
        return(this.state.Auth === true ? 
        <Component {...rest}/>
        :<Redirect to='/' />)
       } } />)
      };

    return (
      <React.Fragment>
        <Nav/>
        <Form> </Form>
        <Router>
          <Switch>
            <Route exact path='/' component={ Counters } />
            <PrivateRoute exact path='/user' component={ userData } />
            <Route path='*' render={() => <h1>404 <br/>Ruta no definida</h1>} />
          </Switch>
        </Router>
        {//<Counters />
        }
      </React.Fragment>
    );
  }
  
}

export default App;
