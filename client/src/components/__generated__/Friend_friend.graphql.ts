/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type Friend_friend = {
    readonly id: string | null;
    readonly firstName: string;
    readonly lastName: string;
    readonly gender: string | null;
    readonly language: string | null;
    readonly email: string | null;
    readonly image: string | null;
    readonly " $refType": "Friend_friend";
};
export type Friend_friend$data = Friend_friend;
export type Friend_friend$key = {
    readonly " $data"?: Friend_friend$data;
    readonly " $fragmentRefs": FragmentRefs<"Friend_friend">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Friend_friend",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
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
  "type": "Friend",
  "abstractKey": null
};
(node as any).hash = 'abdb9e2fb5925ca88a493e1345efbdee';
export default node;
