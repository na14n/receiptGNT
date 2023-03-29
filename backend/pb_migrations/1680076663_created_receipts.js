migrate((db) => {
  const collection = new Collection({
    "id": "k19x2sfw8qbtyko",
    "created": "2023-03-29 07:57:43.304Z",
    "updated": "2023-03-29 07:57:43.304Z",
    "name": "receipts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "i9n9k3r4",
        "name": "user",
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
      },
      {
        "system": false,
        "id": "blfniimt",
        "name": "c_name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": 64,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ndkmrpe2",
        "name": "c_address",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": 64,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "o2klaqhg",
        "name": "c_contact",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": 64,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "hbsac7oa",
        "name": "total",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
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
  const collection = dao.findCollectionByNameOrId("k19x2sfw8qbtyko");

  return dao.deleteCollection(collection);
})
