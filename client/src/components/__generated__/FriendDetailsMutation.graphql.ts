/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type FriendInput = {
    id?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    gender?: string | null;
    language?: string | null;
    email?: string | null;
    image?: string | null;
};
export type FriendDetailsMutationVariables = {
    friend: FriendInput;
};
export type FriendDetailsMutationResponse = {
    readonly updateFriend: {
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
export type FriendDetailsMutation = {
    readonly response: FriendDetailsMutationResponse;
    readonly variables: FriendDetailsMutationVariables;
};



/*
mutation FriendDetailsMutation(
  $friend: FriendInput!
) {
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
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "friend"
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
        "name": "friend",
        "variableName": "friend"
      }
    ],
    "concreteType": "Friend",
    "kind": "LinkedField",
    "name": "updateFriend",
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
    "name": "FriendDetailsMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FriendDetailsMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "d1857f51163ffb6b1019c916520427d3",
    "id": null,
    "metadata": {},
    "name": "FriendDetailsMutation",
    "operationKind": "mutation",
    "text": "mutation FriendDetailsMutation(\n  $friend: FriendInput!\n) {\n  updateFriend(friend: $friend) {\n    id\n    firstName\n    lastName\n    gender\n    language\n    email\n    image\n    viewer {\n      id\n      name\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'c1035410bf1560531c16760d5c793dbf';
export default node;
