import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

class Post extends React.Component {
  state = {
    showPost: true
  };

  removePost = () => {
    axios
      .delete(`https://makinahgram-api.herokuapp.com/posts/${this.props.id}`)
      .then(response => {
        this.setState({
          showPost: false
        });
      })
      .catch(error => console.log(error));
  };
  render() {
    const {
      id,
      image,
      user,
      username,
      thumbnail,
      created,
      updated
    } = this.props;

    if (this.state.showPost === false) {
      return null;
    }
    return (
      <div className="post-container">
        <header className="post-info">
          <NavLink to={`/users/${user}`} className="user-thumbnail">
            <img src={thumbnail} className="user-thumbnail" />
          </NavLink>
          <NavLink to={`/users/${user}`} className="user-name">
            <h2 className="user-name">{username}</h2>
          </NavLink>
          <p className="date-created">{created}</p>
        </header>
        <div className="image-container">
          <img src={image} className="post-image" />
        </div>
        <button className="remove-post" onClick={this.removePost}>
          Remove
        </button>
      </div>
    );
  }
}

export default Post;
