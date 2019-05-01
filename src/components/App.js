import React from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import Profile from "./Profile";
import PageHeader from "./PageHeader";
import PageFooter from "./PageFooter";
import Posts from "./Posts";
import "../style.css";
import Spinner from "./Spinner";
import CreatePost from "./CreatePost";

class App extends React.Component {
  state = {
    posts: [],
    error: null
  };

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    axios
      .get("https://makinahgram-api.herokuapp.com/posts")
      .then(response => {
        this.setState({ posts: response.data });
      })
      .catch(error => this.setState({ error }));
  };

  render() {
    if (this.state.posts.length === 0) {
      return <Spinner />;
    }
    return (
      <div>
        <PageHeader />
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Posts
                {...props}
                posts={this.state.posts}
                key={props.location.pathname}
              />
            )}
          />
          <Route path="/users/:id" render={props => <Profile {...props} />} />
          <Route
            path="/new-post"
            render={props => (
              <CreatePost
                {...props}
                posts={this.state.posts}
                getPosts={this.getPosts}
              />
            )}
          />
        </Switch>
        <PageFooter />
      </div>
    );
  }
}

export default App;
