migrate((db) => {
  const collection = new Collection({
    "id": "ykeinkjntsl7nzj",
    "created": "2023-04-24 21:51:07.296Z",
    "updated": "2023-04-24 21:51:07.296Z",
    "name": "weekly_sales",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hnt0dob1",
        "name": "week",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "0imoly6m",
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
      "query": "SELECT\nreceipts.id,\nSTRFTIME('%W', DATETIME(receipts.created)) as week,\nSUM(products.prod_price * receipt_products.qty) as total_sales\nFROM receipt_products\nJOIN products on receipt_products.product = products.id\nJOIN receipts on receipt_products.receipt = receipts.id\nGROUP BY week\n\n\n"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ykeinkjntsl7nzj");

  return dao.deleteCollection(collection);
})
