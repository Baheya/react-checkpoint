import React from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import Profile from "./Profile";
import PageHeader from "./PageHeader";
import PageFooter from "./PageFooter";
import Posts from "./Posts";
import "../style.css";

class App extends React.Component {
  state = {
    posts: [],
    error: null
  };

  componentDidMount() {
    axios
      .get("https://makinahgram-api.herokuapp.com/posts")
      .then(response => {
        this.setState({ posts: response.data });
      })
      .catch(error => this.setState({ error }));
  }

  render() {
    return (
      <div>
        <PageHeader />
        <Switch>
          <Route
            exact
            path="/"
            render={props => <Posts {...props} posts={this.state.posts} />}
          />
          <Route path="/users/:id" render={props => <Profile {...props} />} />
        </Switch>
        <PageFooter />
      </div>
    );
  }
}

export default App;
