import { graphql } from "babel-plugin-relay/macro";
import { Component } from "react";
import { commitMutation, QueryRenderer } from "react-relay";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { modernEnvironment } from "./../Store";
import "./FriendDetails.css";
import {
  FriendDetailsQuery,
  FriendDetailsQueryResponse,
} from "./__generated__/FriendDetailsQuery.graphql";

class FriendDetailsContainer extends Component<RouteComponentProps> {
  render() {
    const friendId = new URLSearchParams(this.props.location.search).get(
      "id"
    ) as string;

    return (
      <QueryRenderer<FriendDetailsQuery>
        environment={modernEnvironment}
        fetchPolicy={"store-or-network"}
        query={graphql`
          query FriendDetailsQuery($friendId: ID!) {
            friend(id: $friendId) {
              id
              firstName
              lastName
              gender
              language
              email
              image
              viewer {
                id
                name
              }
            }
          }
        `}
        variables={{
          friendId: friendId,
        }}
        render={({ props }) => {
          if (props && props.friend) {
            return (
              <FriendDetailsWithRouter
                friend={props.friend}
              ></FriendDetailsWithRouter>
            );
          } else {
            return <div>Loading...</div>;
          }
        }}
      />
    );
  }
}

class FriendDetails extends Component<
  RouteComponentProps & { friend: any },
  { firstName: string; lastName: string }
> {
  readonly state = {
    firstName: this.props.friend.firstName,
    lastName: this.props.friend.lastName,
  };

  componentDidMount() {
    this.updateState();
  }

  render() {
    const { friend } = this.props;
    const { firstName, lastName } = this.state;

    return (
      <div className="container">
        <div className="card edit-friend-root">
          <div className="card-image">
            <img src={friend.image} alt={friend.lastName}></img>
            <span className="card-title">
              {friend.firstName} {friend.lastName}
            </span>
          </div>

          <div className="card-content">
            <div>
              <input value={firstName} onChange={this.onFirstNameChange} />
            </div>
            <div>
              <input value={lastName} onChange={this.onLastNameChange} />
            </div>
            <div>{friend.gender}</div>
            <div>{friend.email}</div>

            <input
              type="button"
              value="Save"
              className="waves-effect waves-light btn"
              style={{
                marginTop: "20px",
              }}
              onClick={this.onSave}
            ></input>

            <div className="viewer blue-text text-darken-2">
              {friend.viewer.name}
            </div>
          </div>
        </div>
      </div>
    );
  }

  onFirstNameChange = (args: any) => {
    this.setState({ firstName: args.target.value });
  };

  onLastNameChange = (args: any) => {
    this.setState({ lastName: args.target.value });
  };

  onSave = () => {
    const updatedFriend = { ...this.props.friend, ...this.state };
    this.updateFriend(updatedFriend);

    this.props.history.push("/");
  };

  updateFriend(friend: FriendDetailsQueryResponse["friend"]) {
    if (!friend) {
      return;
    }

    const { viewer, ...dataToUpdate } = friend;

    commitMutation(modernEnvironment, {
      mutation: graphql`
        mutation FriendDetailsMutation($friend: FriendInput!) {
          updateFriend(friend: $friend) {
            id
            firstName
            lastName
            gender
            language
            email
            image
            viewer {
              id
              name
            }
          }
        }
      `,
      variables: {
        friend: dataToUpdate,
      },
      onCompleted: (response, errors) => {},
      onError: (err) => console.error(err),
      // Here is changed API, optimisticResponse got the store access
      optimisticResponse: (store: any) => {
        console.log("This is an exemplary fetch from store:");
        const friendToUpdate = store?.get(dataToUpdate.id as string);
        console.log(friendToUpdate);

        return {
          updateFriend: {
            ...dataToUpdate,
            // Comment 'viewer' to check out the validation
            //viewer: friend?.viewer,
          },
        };
      },
      // optimisticUpdater: (store) => {
      //   const friendToUpdate = store.get(dataToUpdate.id as string);
      //   if (!friendToUpdate) {
      //     return;
      //   }
      //   friendToUpdate.setValue(dataToUpdate.firstName, "firstName");
      //   friendToUpdate.setValue(dataToUpdate.lastName, "lastName");
      // },
    });
  }

  updateState() {
    if (!this.props.friend) {
      this.setState({
        firstName: "",
        lastName: "",
      });
      return;
    }

    this.setState({
      firstName: this.props.friend.firstName,
      lastName: this.props.friend.lastName,
    });
  }
}

const FriendDetailsWithRouter = withRouter(FriendDetails);

export default withRouter(FriendDetailsContainer);
