import React from 'react';
import Nav from './Nav';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Posts from './Posts';
import PostDetail from './PostDetail';



function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path = "/">
            <Redirect to="/posts" />
          </Route>
          <Route exact path="/posts" component= { Posts } />
          <Route path="/posts/:id" component= { PostDetail } />
        </Switch>
    </div>
    </Router>
    
  );
}



export default App;
