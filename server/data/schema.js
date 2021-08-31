import {
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';
import {
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
  fromGlobalId,
  nodeDefinitions,
} from 'graphql-relay';
import { Friend, getFriend, getFriends, getViewer, updateFriend, Viewer } from './database';

const { nodeInterface } = nodeDefinitions(
  (globalId) => {
    const { type, id } = fromGlobalId(globalId);
    if (type === 'Friend') {
      return getFriend(id);
    }
    if (type === 'Viewer') {
      return getViewer();
    }
    return null;
  },
  (obj) => {
    if (obj instanceof Friend) {
      return GraphQLFriend;
    }
    if (obj instanceof Viewer) {
      return GraphQLViewer;
    }
    return null;
  },
);

const GraphQLFriend = new GraphQLObjectType({
  name: 'Friend',
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    firstName: {
      type: GraphQLNonNull(GraphQLString),
    },
    lastName: {
      type: GraphQLNonNull(GraphQLString),
    },
    gender: {
      type: GraphQLString,
    },
    language: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    },
    image: {
      type: GraphQLString,
    },
    viewer: {
      type: GraphQLNonNull(GraphQLViewer),
    },
  }),
  interface: [nodeInterface],
});

const { connectionType: friendsConnection } = connectionDefinitions({
  name: 'Friend',
  nodeType: GraphQLFriend,
});

const GraphQLViewer = new GraphQLObjectType({
  name: 'Viewer',
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLNonNull(GraphQLString),
    },
    friends: {
      type: friendsConnection,
      args: connectionArgs,
      resolve: (_, args) => connectionFromArray(getFriends(), args),
    },
  }),
  interface: [nodeInterface],
});

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    friends: {
      type: new GraphQLList(GraphQLFriend),
      resolve: () => {
        return getFriends();
      },
    },
    friend: {
      type: GraphQLFriend,
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve: (_, { id }) => getFriend(id),
    },
    viewer: {
      type: GraphQLViewer,
      resolve: () => {
        return getViewer();
      },
    },
  }),
});

const GraphQLFriendInput = new GraphQLInputObjectType({
  name: 'FriendInput',
  fields: {
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    gender: { type: GraphQLString },
    language: { type: GraphQLString },
    email: { type: GraphQLString },
    image: { type: GraphQLString },
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    updateFriend: {
      type: GraphQLFriend,
      args: {
        friend: {
          type: GraphQLFriendInput,
        },
      },
      resolve: async (_, { friend }) => {
        //TODO temporary - to test optimisticUpdater
        const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
        await delay(2000);
        return updateFriend(friend);
      },
    },
  }),
});

export const schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});
