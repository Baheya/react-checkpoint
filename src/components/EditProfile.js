import React from "react";

class EditProfile extends React.Component {
  render() {
    return (
      <div>
        <button className="btn profile-edit-btn">Edit Profile</button>
        <button
          className="btn profile-settings-btn"
          aria-label="profile settings"
        >
          <i className="fas fa-cog" aria-hidden="true" />
        </button>
      </div>
    );
  }
}

export default EditProfile;
