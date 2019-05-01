import React from "react";
import { NavLink } from "react-router-dom";

class Post extends React.Component {
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
      </div>
    );
  }
}

export default Post;
