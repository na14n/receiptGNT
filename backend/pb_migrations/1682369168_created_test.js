migrate((db) => {
  const collection = new Collection({
    "id": "fe3c1t763fi7sn3",
    "created": "2023-04-24 20:46:08.372Z",
    "updated": "2023-04-24 20:46:08.372Z",
    "name": "test",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wxioow8k",
        "name": "product",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "zxcjlr5b5uxd2jo",
          "cascadeDelete": true,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": [
            "prod_name"
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
    "options": {
      "query": "SELECT\n    receipt_products.id,\n    receipt_products.product\nFROM receipt_products\n"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("fe3c1t763fi7sn3");

  return dao.deleteCollection(collection);
})
