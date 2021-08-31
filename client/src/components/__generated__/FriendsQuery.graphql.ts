/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type FriendsQueryVariables = {};
export type FriendsQueryResponse = {
    readonly friends: ReadonlyArray<{
        readonly id: string | null;
        readonly " $fragmentRefs": FragmentRefs<"Friend_friend">;
    } | null> | null;
};
export type FriendsQuery = {
    readonly response: FriendsQueryResponse;
    readonly variables: FriendsQueryVariables;
};



/*
query FriendsQuery {
  friends {
    id
    ...Friend_friend
  }
}

fragment Friend_friend on Friend {
  id
  firstName
  lastName
  gender
  language
  email
  image
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "FriendsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Friend",
        "kind": "LinkedField",
        "name": "friends",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Friend_friend"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "FriendsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Friend",
        "kind": "LinkedField",
        "name": "friends",
        "plural": true,
        "selections": [
          (v0/*: any*/),
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
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "40820d4d449ef7a479328c5ed244e19a",
    "id": null,
    "metadata": {},
    "name": "FriendsQuery",
    "operationKind": "query",
    "text": "query FriendsQuery {\n  friends {\n    id\n    ...Friend_friend\n  }\n}\n\nfragment Friend_friend on Friend {\n  id\n  firstName\n  lastName\n  gender\n  language\n  email\n  image\n}\n"
  }
};
})();
(node as any).hash = '2e2d912e97b5a1afe2ec14589f2ec6d0';
export default node;
