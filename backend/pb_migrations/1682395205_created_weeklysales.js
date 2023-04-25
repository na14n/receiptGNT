migrate((db) => {
  const collection = new Collection({
    "id": "1yqpsq6hfbl95m1",
    "created": "2023-04-25 04:00:05.333Z",
    "updated": "2023-04-25 04:00:05.333Z",
    "name": "weeklysales",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "smriwwea",
        "name": "week_number",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "sxmazcyc",
        "name": "total_sales",
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
      "query": "SELECT \n  (ROW_NUMBER() OVER()) as id,\n  STRFTIME('%W', receipts.created) as week_number,\nSUM(receipt_products.qty * products.prod_price) as total_sales\nFROM receipts, receipt_products, products\nWHERE receipts.id = receipt_products.receipt\nAND receipt_products.product = products.id\nGROUP BY week_number"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("1yqpsq6hfbl95m1");

  return dao.deleteCollection(collection);
})
