import {Route, Switch, Redirect} from 'react-router-dom'


import './App.css';
import Home from './components/Home';
import Resume from './components/Resume';

const App = ()=>(
  <>
  <Switch>
    <Route exact path = "/" component={Home}/>
    <Route exact path = "/resume" component={Resume}/>
  </Switch>
  </>
)

export default App