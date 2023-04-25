migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ykeinkjntsl7nzj")

  collection.options = {
    "query": "SELECT receipts.user,\n  (ROW_NUMBER() OVER()) as id,\n SUM(products.prod_price * receipt_products.qty) as weekly_sales,\n  STRFTIME('%W', receipts.created) as week,\n  date(receipts.created, '-6 days', 'weekday 1') as week_start_date\nFROM receipts\nJOIN receipt_products on receipts.id = receipt_products.receipt\nJOIN products on receipt_products.product = products.id \nWHERE\nreceipts.created >= DATE('now', '-7 day')\nGROUP BY\nreceipts.user, week_start_date\n\n\n\n"
  }

  // remove
  collection.schema.removeField("nbitkp6z")

  // remove
  collection.schema.removeField("9pyhezor")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "p57ckevj",
    "name": "weekly_sales",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hpfmbvno",
    "name": "week",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "h1h9aitt",
    "name": "week_start_date",
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
    "query": "SELECT receipts.user,\n  (ROW_NUMBER() OVER()) as id,\n SUM(products.prod_price * receipt_products.qty) as weekly_sales,\n  date(receipts.created, '-6 days', 'weekday 1') as week_start_date\nFROM receipts\nJOIN receipt_products on receipts.id = receipt_products.receipt\nJOIN products on receipt_products.product = products.id \nWHERE\nreceipts.created >= DATE('now', '-7 day')\nGROUP BY\nreceipts.user, week_start_date\n\n\n\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nbitkp6z",
    "name": "weekly_sales",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9pyhezor",
    "name": "week_start_date",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("p57ckevj")

  // remove
  collection.schema.removeField("hpfmbvno")

  // remove
  collection.schema.removeField("h1h9aitt")

  return dao.saveCollection(collection)
})
