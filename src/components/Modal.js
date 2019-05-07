import React from "react";
import CreatePost from "./CreatePost";

const Modal = ({ handleClose, show, children, getPosts }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <CreatePost getPosts={getPosts} />
        <button onClick={handleClose} className="close-button">
          Close
        </button>
      </section>
    </div>
  );
};

export default Modal;
