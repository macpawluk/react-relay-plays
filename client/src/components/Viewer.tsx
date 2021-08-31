import { graphql } from "babel-plugin-relay/macro";
import { Component } from "react";
import { QueryRenderer } from "react-relay";
import { modernEnvironment } from "./../Store";
import {
  ViewerQuery,
  ViewerQueryResponse,
} from "./__generated__/ViewerQuery.graphql";

export default class Viewer extends Component<{}> {
  render() {
    return (
      <QueryRenderer<ViewerQuery>
        environment={modernEnvironment}
        fetchPolicy={"store-or-network"}
        query={graphql`
          query ViewerQuery {
            viewer {
              id
              name
              friends {
                edges {
                  node {
                    id
                    firstName
                    lastName
                    gender
                  }
                }
              }
            }
          }
        `}
        variables={{}}
        render={({ props }) => {
          if (props && props.viewer) {
            return <div className="container">{this.renderViewer(props)}</div>;
          } else {
            return <div>Loading...</div>;
          }
        }}
      />
    );
  }

  private renderViewer = (response: ViewerQueryResponse) => {
    if (!response.viewer) {
      return null;
    }
    return (
      <div>
        <h4>{response.viewer.name}'s friends</h4>
        <ul className="collection">
          {response.viewer.friends?.edges?.map((e) =>
            this.renderFriendLead(e?.node)
          )}
        </ul>
      </div>
    );
  };

  private renderFriendLead = (
    friend:
      | {
          readonly id: string | null;
          readonly firstName: string;
          readonly lastName: string;
          readonly gender: string | null;
        }
      | null
      | undefined
  ) => {
    if (!friend || !friend.id) {
      return null;
    }
    return (
      <li className="collection-item" key={friend.id}>
        <div>
          {friend.firstName} {friend.lastName}
          <div className="secondary-content">{friend.gender}</div>
        </div>
      </li>
    );
  };
}
