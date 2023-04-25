migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ykeinkjntsl7nzj")

  collection.options = {
    "query": "SELECT receipts.user,\n  (ROW_NUMBER() OVER()) as id,\n STRFTIME('%Y-%W', receipts.created) as week,\n SUM(products.prod_price * receipt_products.qty) as weekly_sales\nFROM receipts\nJOIN receipt_products on receipts.id = receipt_products.receipt\nJOIN products on receipt_products.product = products.id \nWHERE\nweek = STRFTIME('%Y-%W', 'now')\nGROUP BY\nweek\n\n\n\n"
  }

  // remove
  collection.schema.removeField("kiyrjsy3")

  // remove
  collection.schema.removeField("ocvzmaqp")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ykeinkjntsl7nzj")

  collection.options = {
    "query": "SELECT receipts.user,\n  (ROW_NUMBER() OVER()) as id,\n STRFTIME('%W', receipts.created) as week,\n SUM(products.prod_price * receipt_products.qty) as weekly_sales\nFROM receipts\nJOIN receipt_products on receipts.id = receipt_products.receipt\nJOIN products on receipt_products.product = products.id \nGROUP BY receipts.user, week\nHAVING week = STRFTIME('%Y-%W', 'now')\n\n\n\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kiyrjsy3",
    "name": "week",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ocvzmaqp",
    "name": "weekly_sales",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("imm05wl5")

  // remove
  collection.schema.removeField("gvzdnbqs")

  return dao.saveCollection(collection)
})
