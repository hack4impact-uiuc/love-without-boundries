/**
 * @flow
 * @relayHash 7e2f2cf6fc8d836ab85ff6f7ac5658a9
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteLessonInput = {
  id: string,
  clientMutationId?: ?string,
};
export type deleteLessonMutationVariables = {|
  input: DeleteLessonInput
|};
export type deleteLessonMutationResponse = {|
  +deleteLesson: ?{|
    +clientMutationId: ?string
  |}
|};
*/


/*
mutation deleteLessonMutation(
  $input: DeleteLessonInput!
) {
  deleteLesson(input: $input) {
    clientMutationId
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteLessonInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteLesson",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "DeleteLessonInput!"
      }
    ],
    "concreteType": "DeleteLessonPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "clientMutationId",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "deleteLessonMutation",
  "id": null,
  "text": "mutation deleteLessonMutation(\n  $input: DeleteLessonInput!\n) {\n  deleteLesson(input: $input) {\n    clientMutationId\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "deleteLessonMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "deleteLessonMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3ab1d76272058ffecb1f475a0fab0d90';
module.exports = node;
