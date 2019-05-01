import React from "react";
import Post from "./Post";

class Posts extends React.Component {
  render() {
    const { posts } = this.props;

    return (
      <div className="page-content-container">
        {posts.map(post => {
          const {
            id,
            image,
            created_at = date,
            updated_at,
            user_id,
            user: { name, thumbnail }
          } = post;
          const date = new Date(created_at).toLocaleDateString();
          return (
            <Post
              id={id}
              username={name}
              thumbnail={thumbnail}
              image={image}
              user={user_id}
              created={date}
              updated={updated_at}
            />
          );
        })}
      </div>
    );
  }
}

export default Posts;
