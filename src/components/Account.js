import React from "react";
import axios from "axios";
import Post from "./Post";

class Profile extends React.Component {
  state = {
    user: null
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    axios
      .get(`https://makinahgram-api.herokuapp.com/users/${id}`)
      .then(({ data: user }) => {
        this.setState({ user });
      })
      .catch(error => this.setState({ error }));
  }

  // API

  render() {
    if (!this.state.user) {
      return <p>Loading...</p>;
    }
    const {
      name,
      id,
      followers,
      following,
      thumbnail,
      posts
    } = this.state.user;
    return (
      <div className="profile-page-container">
        <div className="user-container">
          <div className="profile">
            <div className="profile-image">
              <img src={thumbnail} className="profile-image" />
            </div>
            <div className="profile-user-settings">
              <h1 className="profile-user-name">{name}</h1>
              <button className="btn profile-edit-btn">Edit Profile</button>
              <button
                className="btn profile-settings-btn"
                aria-label="profile settings"
              >
                <i className="fas fa-cog" aria-hidden="true" />
              </button>
            </div>
            <div className="profile-stats">
              <ul>
                <li>
                  <span className="profile-stat-count">{posts.length}</span>{" "}
                  posts
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
        <div className="gallery">
          {posts.map(post => {
            const {
              user_id,
              thumbnail,
              image,
              user,
              created_at,
              updated_at
            } = post;
            const date = new Date(created_at).toLocaleDateString();
            return (
              <Post
                id={id}
                username={name}
                thumbnail={this.state.user.thumbnail}
                image={image}
                user={id}
                created={date}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Profile;
