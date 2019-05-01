import React from "react";
import Axios from "axios";

class CreatePost extends React.Component {
  state = {
    input: "",
    posts: []
  };

  handleInputChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  handlePostRequest = e => {
    e.preventDefault();
    Axios.post("https://makinahgram-api.herokuapp.com/posts", {
      user_id: 1,
      image: `${this.state.input}`
    })
      .then(response => {
        this.props.getPosts();
        this.setState({ input: "" });
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div className="new-post-form">
        <form onSubmit={this.handlePostRequest} className="new-post-form">
          <input
            name="new-post"
            type="url"
            onChange={this.handleInputChange}
            value={this.state.input}
            className="input-form"
          />
          <button type="submit" name="new-post" className="button-form">
            Post Something New
          </button>
        </form>
      </div>
    );
  }
}

export default CreatePost;
