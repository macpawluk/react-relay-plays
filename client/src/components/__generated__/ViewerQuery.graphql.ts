/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type ViewerQueryVariables = {};
export type ViewerQueryResponse = {
    readonly viewer: {
        readonly id: string | null;
        readonly name: string;
        readonly friends: {
            readonly edges: ReadonlyArray<{
                readonly node: {
                    readonly id: string | null;
                    readonly firstName: string;
                    readonly lastName: string;
                    readonly gender: string | null;
                } | null;
            } | null> | null;
        } | null;
    } | null;
};
export type ViewerQuery = {
    readonly response: ViewerQueryResponse;
    readonly variables: ViewerQueryVariables;
};



/*
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
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Viewer",
    "kind": "LinkedField",
    "name": "viewer",
    "plural": false,
    "selections": [
      (v0/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "FriendConnection",
        "kind": "LinkedField",
        "name": "friends",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "FriendEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Friend",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
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
                  }
                ],
                "storageKey": null
              }
            ],
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ViewerQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ViewerQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "2385b8b0195462afbb35797722a617fb",
    "id": null,
    "metadata": {},
    "name": "ViewerQuery",
    "operationKind": "query",
    "text": "query ViewerQuery {\n  viewer {\n    id\n    name\n    friends {\n      edges {\n        node {\n          id\n          firstName\n          lastName\n          gender\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '02bdd5dc3cf060715f10c9c68ebf6be2';
export default node;
