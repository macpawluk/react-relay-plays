import { graphql } from "babel-plugin-relay/macro";
import { Component } from "react";
import { createFragmentContainer } from "react-relay";
import { Link } from "react-router-dom";
import { AppConstants } from "./../AppConstants";

class Friend extends Component<{ friend: any }> {
  render() {
    const friend = this.props.friend;

    return (
      <div className="card">
        <Link
          to={{
            pathname: `${AppConstants.Routing.Details}`,
            search: `?id=${friend.id}`,
          }}
        >
          <div className="card-image">
            <img src={friend.image} alt={friend.lastName}></img>
            <span className="card-title">
              {friend.firstName} {friend.lastName}
            </span>
          </div>
        </Link>

        <div className="card-content">
          <div className="row">
            <div className="col l6 center">
              <blockquote>Is a {friend.gender}</blockquote>
            </div>
            <div className="col l6 center">
              <blockquote>Speaks {friend.language}</blockquote>
            </div>
          </div>
        </div>
        <div className="card-action">
          <a href={"mailto:" + friend.email} target="_blank" rel="noreferrer">
            Email: {friend.email}
          </a>
        </div>
      </div>
    );
  }
}

export default createFragmentContainer(Friend, {
  friend: graphql`
    fragment Friend_friend on Friend {
      id
      firstName
      lastName
      gender
      language
      email
      image
    }
  `,
});
