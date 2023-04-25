migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ykeinkjntsl7nzj")

  collection.options = {
    "query": "SELECT\nreceipts.id,\nreceipts.user as user,\nSTRFTIME('%W', DATETIME(receipts.created)) as week,\nSUM(products.prod_price * receipt_products.qty) as total_sales\nFROM receipt_products\nJOIN products on receipt_products.product = products.id\nJOIN receipts on receipt_products.receipt = receipts.id\nGROUP BY week\n\n\n"
  }

  // remove
  collection.schema.removeField("hnt0dob1")

  // remove
  collection.schema.removeField("0imoly6m")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pykkmlwy",
    "name": "week",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "36tqsqfd",
    "name": "total_sales",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ykeinkjntsl7nzj")

  collection.options = {
    "query": "SELECT\nreceipts.id,\nSTRFTIME('%W', DATETIME(receipts.created)) as week,\nSUM(products.prod_price * receipt_products.qty) as total_sales\nFROM receipt_products\nJOIN products on receipt_products.product = products.id\nJOIN receipts on receipt_products.receipt = receipts.id\nGROUP BY week\n\n\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hnt0dob1",
    "name": "week",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0imoly6m",
    "name": "total_sales",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("i9n9k3r4")

  // remove
  collection.schema.removeField("pykkmlwy")

  // remove
  collection.schema.removeField("36tqsqfd")

  return dao.saveCollection(collection)
})
