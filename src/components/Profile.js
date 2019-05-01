import React from "react";
import axios from "axios";
import Post from "./Post";
import ProfileInfo from "./ProfileInfo";
import Spinner from "./Spinner";

class Profile extends React.Component {
  state = {
    user: null
  };

  componentDidMount() {
    this.getUser();
  }

  getUser = () => {
    const { id } = this.props.match.params;
    axios
      .get(`https://makinahgram-api.herokuapp.com/users/${id}`)
      .then(({ data: user }) => {
        this.setState({ user });
      })
      .catch(error => this.setState({ error }));
  };

  render() {
    if (!this.state.user) {
      return <Spinner />;
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
        <ProfileInfo
          name={name}
          id={id}
          followers={followers}
          following={following}
          thumbnail={thumbnail}
          posts={posts}
        />
        <div className="gallery">
          {posts.map(post => {
            const {
              user_id,
              thumbnail,
              image,
              user,
              created_at,
              updated_at,
              id
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
