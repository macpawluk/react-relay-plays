import { graphql } from "babel-plugin-relay/macro";
import { Component } from "react";
import { QueryRenderer } from "react-relay";
import { Link } from "react-router-dom";
import { AppConstants } from "../AppConstants";
import { modernEnvironment } from "./../Store";
import Friend from "./Friend";
import "./Friends.css";
import { FriendsQuery } from "./__generated__/FriendsQuery.graphql";

export default class Friends extends Component<{}> {
  render() {
    return (
      <QueryRenderer<FriendsQuery>
        environment={modernEnvironment}
        fetchPolicy={"store-or-network"}
        query={graphql`
          query FriendsQuery {
            friends {
              id
              ...Friend_friend
            }
          }
        `}
        variables={{}}
        render={({ props }) => {
          if (props && props.friends) {
            return (
              <div className="container">
                <div className="row">
                  <ul>
                    {props.friends
                      .map((friend) => ({ id: friend?.id, ...friend }))
                      .map((friend) => (
                        <li className="col l6 s12" key={friend.id}>
                          <Friend key={friend.id} friend={friend} />
                        </li>
                      ))}
                  </ul>
                </div>
                <div className="user-page-link-root">
                  <Link
                    to={{
                      pathname: `${AppConstants.Routing.Viewer}`,
                    }}
                  >
                    User page →
                  </Link>
                </div>
              </div>
            );
          } else {
            return <div>Loading...</div>;
          }
        }}
      />
    );
  }
}
