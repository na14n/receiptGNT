migrate((db) => {
  const collection = new Collection({
    "id": "ipssgc1f2llakbr",
    "created": "2023-04-25 04:25:43.978Z",
    "updated": "2023-04-25 04:25:43.978Z",
    "name": "weekly",
    "type": "view",
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
        "id": "ddmfqik9",
        "name": "week",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "fegzefcy",
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
      "query": "SELECT\nreceipts.id,\nreceipts.user as user,\nSTRFTIME('%W', DATETIME(receipts.created)) as week,\nSUM(products.prod_price * receipt_products.qty) as total_sales\nFROM receipt_products\nJOIN products on receipt_products.product = products.id\nJOIN receipts on receipt_products.receipt = receipts.id\nGROUP BY week\n\n\n"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ipssgc1f2llakbr");

  return dao.deleteCollection(collection);
})
