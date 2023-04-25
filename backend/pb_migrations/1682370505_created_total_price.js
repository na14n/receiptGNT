migrate((db) => {
  const collection = new Collection({
    "id": "bo8kj5a8fbcff3y",
    "created": "2023-04-24 21:08:25.569Z",
    "updated": "2023-04-24 21:08:25.569Z",
    "name": "total_price",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ihdglg49",
        "name": "total_order_cost",
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
      "query": "SELECT \n  receipts.id, \n  SUM(products.prod_price * receipt_products.qty) as total_order_cost\nFROM receipts\nJOIN receipt_products on receipts.id = receipt_products.id\nJOIN products on receipt_products.product = products.id\nGROUP BY receipts.id"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("bo8kj5a8fbcff3y");

  return dao.deleteCollection(collection);
})
