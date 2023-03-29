migrate((db) => {
  const collection = new Collection({
    "id": "0rgtj1sm8n6o0js",
    "created": "2023-03-29 03:41:28.578Z",
    "updated": "2023-03-29 03:41:28.578Z",
    "name": "business_profile",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "r93cwxwk",
        "name": "field",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": true,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": [
            "username"
          ]
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("0rgtj1sm8n6o0js");

  return dao.deleteCollection(collection);
})
