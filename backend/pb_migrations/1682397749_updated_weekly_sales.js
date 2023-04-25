migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ykeinkjntsl7nzj")

  collection.options = {
    "query": "SELECT receipts.user,\n  (ROW_NUMBER() OVER()) as id,\n SUM(products.prod_price * receipt_products.qty) as weekly_sales\nFROM receipts\nJOIN receipt_products on receipts.id = receipt_products.receipt\nJOIN products on receipt_products.product = products.id \nWHERE\nreceipts.created >= DATE('now', '-7 day')\nGROUP BY\nreceipts.user\n\n\n\n"
  }

  // remove
  collection.schema.removeField("imm05wl5")

  // remove
  collection.schema.removeField("gvzdnbqs")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nqaxwy5x",
    "name": "weekly_sales",
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
    "query": "SELECT receipts.user,\n  (ROW_NUMBER() OVER()) as id,\n STRFTIME('%Y-%W', receipts.created) as week,\n SUM(products.prod_price * receipt_products.qty) as weekly_sales\nFROM receipts\nJOIN receipt_products on receipts.id = receipt_products.receipt\nJOIN products on receipt_products.product = products.id \nWHERE\nweek = STRFTIME('%Y-%W', 'now')\nGROUP BY\nweek\n\n\n\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "imm05wl5",
    "name": "week",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gvzdnbqs",
    "name": "weekly_sales",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("nqaxwy5x")

  return dao.saveCollection(collection)
})
