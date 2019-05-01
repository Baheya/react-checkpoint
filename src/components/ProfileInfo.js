import React from "react";
import axios from "axios";
import EditProfile from "./EditProfile";
import { Route } from "react-router-dom";

class ProfileInfo extends React.Component {
  render() {
    const { name, id, followers, following, thumbnail, posts } = this.props;
    return (
      <div className="user-container">
        <div className="profile">
          <div className="profile-image">
            <img src={thumbnail} className="profile-image" />
          </div>
          <div className="profile-user-settings">
            <h1 className="profile-user-name">{name}</h1>
            <Route path="/users/1" component={EditProfile} />
          </div>
          <div className="profile-stats">
            <ul>
              <li>
                <span className="profile-stat-count">{posts.length}</span> posts
              </li>
              <li>
                <span className="profile-stat-count">{followers}</span>{" "}
                followers
              </li>
              <li>
                <span className="profile-stat-count">{following}</span>{" "}
                following
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileInfo;
