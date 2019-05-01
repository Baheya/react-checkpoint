import React from "react";
import { NavLink } from "react-router-dom";
import Modal from "./Modal";

class CreatePostButton extends React.Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div className="new-post-link">
        <Modal show={this.state.show} handleClose={this.hideModal} />
        <button onClick={this.showModal}>Post Something New!</button>
      </div>
    );
  }
}

export default CreatePostButton;
