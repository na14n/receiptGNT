migrate((db) => {
  const collection = new Collection({
    "id": "51ihkkmnnrcl4l4",
    "created": "2023-03-29 07:59:34.580Z",
    "updated": "2023-03-29 07:59:34.580Z",
    "name": "receipt_products",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ajh9whqa",
        "name": "receipt",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "k19x2sfw8qbtyko",
          "cascadeDelete": true,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": [
            "id"
          ]
        }
      },
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
      },
      {
        "system": false,
        "id": "7figoxri",
        "name": "qty",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "jdnqi6af",
        "name": "subtotal",
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
  const collection = dao.findCollectionByNameOrId("51ihkkmnnrcl4l4");

  return dao.deleteCollection(collection);
})
