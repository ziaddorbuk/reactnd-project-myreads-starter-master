import React from 'react'
import './App.css'
import Home from './Home'
import Search from './Search'
import {Route,Switch} from 'react-router-dom'

class BooksApp extends React.Component {
  constructor(props) {
    super(props)

    // Bind the this context to the handler function
    this.handler = this.handler.bind(this);

    // Set some state
    this.state = {
      showSearchPage: false
    };
}
  handler() {
    this.setState({
      showSearchPage: true
    });
}
  
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path={'/'} component={Home}/>
          <Route  exact path={'/search'} component={Search}/>
        </Switch>
      </div>
    )
  }
}

export default BooksApp

