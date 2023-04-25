migrate((db) => {
  const collection = new Collection({
    "id": "y5sg7y650lhyu6l",
    "created": "2023-04-24 21:36:03.312Z",
    "updated": "2023-04-24 21:36:03.312Z",
    "name": "totals",
    "type": "view",
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
        "id": "gwnoosdq",
        "name": "total_orders",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT\nreceipt_products.id,\nreceipt_products.receipt,\nSUM(products.prod_price * receipt_products.qty) as total_orders\nFROM\nreceipt_products\nJOIN products on receipt_products.product = products.id\nGROUP BY receipt_products.receipt"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("y5sg7y650lhyu6l");

  return dao.deleteCollection(collection);
})
