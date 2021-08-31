/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type FriendDetailsQueryVariables = {
    friendId: string;
};
export type FriendDetailsQueryResponse = {
    readonly friend: {
        readonly id: string | null;
        readonly firstName: string;
        readonly lastName: string;
        readonly gender: string | null;
        readonly language: string | null;
        readonly email: string | null;
        readonly image: string | null;
        readonly viewer: {
            readonly id: string | null;
            readonly name: string;
        };
    } | null;
};
export type FriendDetailsQuery = {
    readonly response: FriendDetailsQueryResponse;
    readonly variables: FriendDetailsQueryVariables;
};



/*
query FriendDetailsQuery(
  $friendId: ID!
) {
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
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "friendId"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "friendId"
      }
    ],
    "concreteType": "Friend",
    "kind": "LinkedField",
    "name": "friend",
    "plural": false,
    "selections": [
      (v1/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "firstName",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "lastName",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "gender",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "language",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "email",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "image",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "FriendDetailsQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FriendDetailsQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "73121dd898aa7a8d449bfedef01b68fc",
    "id": null,
    "metadata": {},
    "name": "FriendDetailsQuery",
    "operationKind": "query",
    "text": "query FriendDetailsQuery(\n  $friendId: ID!\n) {\n  friend(id: $friendId) {\n    id\n    firstName\n    lastName\n    gender\n    language\n    email\n    image\n    viewer {\n      id\n      name\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '60b8c0512dfca4dfa98dc1fd1dfd6245';
export default node;
