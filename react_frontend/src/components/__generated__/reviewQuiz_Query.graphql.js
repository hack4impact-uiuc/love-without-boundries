/**
 * @flow
 * @relayHash 4b9fd4f922ab4abf4f9118aff7fefafb
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type reviewQuiz_QueryVariables = {|
  lesson_id: string,
|};
export type reviewQuiz_QueryResponse = {|
  +node: ?{|
    +quiz?: ?{|
      +questions: ?$ReadOnlyArray<?{|
        +questionName: ?string,
        +answers: ?$ReadOnlyArray<?{|
          +answerName: ?string,
          +isCorrect: ?boolean,
        |}>,
      |}>,
    |},
  |},
|};
*/


/*
query reviewQuiz_Query(
  $lesson_id: ID!
) {
  node(id: $lesson_id) {
    __typename
    ... on Lesson {
      quiz {
        questions {
          questionName
          answers {
            answerName
            isCorrect
          }
          id
        }
      }
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "lesson_id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "lesson_id",
    "type": "ID!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "questionName",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "answers",
  "storageKey": null,
  "args": null,
  "concreteType": "Answer",
  "plural": true,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "answerName",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "isCorrect",
      "args": null,
      "storageKey": null
    }
  ]
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "reviewQuiz_Query",
  "id": null,
  "text": "query reviewQuiz_Query(\n  $lesson_id: ID!\n) {\n  node(id: $lesson_id) {\n    __typename\n    ... on Lesson {\n      quiz {\n        questions {\n          questionName\n          answers {\n            answerName\n            isCorrect\n          }\n          id\n        }\n      }\n    }\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "reviewQuiz_Query",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": v1,
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "type": "Lesson",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "quiz",
                "storageKey": null,
                "args": null,
                "concreteType": "Quiz",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "questions",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Question",
                    "plural": true,
                    "selections": [
                      v2,
                      v3
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "reviewQuiz_Query",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": v1,
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          },
          v4,
          {
            "kind": "InlineFragment",
            "type": "Lesson",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "quiz",
                "storageKey": null,
                "args": null,
                "concreteType": "Quiz",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "questions",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Question",
                    "plural": true,
                    "selections": [
                      v2,
                      v3,
                      v4
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = '11be60fc26c1ba92646f77b6cd720f14';
module.exports = node;
