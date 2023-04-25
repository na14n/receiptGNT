migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ykeinkjntsl7nzj")

  collection.options = {
    "query": "SELECT receipts.user,\n(ROW_NUMBER() OVER()) as id,\n SUM(products.prod_price * receipt_products.qty) as weekly_sales\nFROM receipts\nJOIN receipt_products on receipts.id = receipt_products.receipt\nJOIN products on receipt_products.product = products.id\nWHERE STRFTIME('%W', receipts.created) = STRFTIME('%W', 'now')\nGROUP BY receipts.user\n\n\n\n"
  }

  // remove
  collection.schema.removeField("mtqle2ck")

  // remove
  collection.schema.removeField("wnlnesyw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5pdehiya",
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
    "query": "SELECT\nreceipts.id,\nreceipts.user as user,\nSTRFTIME('%W', DATETIME(receipts.created)) as week,\nSUM(products.prod_price * receipt_products.qty) as total_sales\nFROM receipt_products\nJOIN products on receipt_products.product = products.id\nJOIN receipts on receipt_products.receipt = receipts.id\nGROUP BY week\n\n\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mtqle2ck",
    "name": "week",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wnlnesyw",
    "name": "total_sales",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("5pdehiya")

  return dao.saveCollection(collection)
})
