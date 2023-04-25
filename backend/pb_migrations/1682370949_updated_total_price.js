migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bo8kj5a8fbcff3y")

  collection.options = {
    "query": "SELECT \n  receipts.id, \n  SUM(products.prod_price * receipt_products.qty) as total_order_cost\nFROM receipts\nINNER JOIN receipt_products on receipts.id = receipt_products.receipt\nINNER JOIN products on receipt_products.id = products.id\nGROUP BY receipts.id"
  }

  // remove
  collection.schema.removeField("y7j9yn0f")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jay8znlv",
    "name": "total_order_cost",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bo8kj5a8fbcff3y")

  collection.options = {
    "query": "SELECT \n  receipts.id, \n  SUM(products.prod_price * receipt_products.qty) as total_order_cost\nFROM receipts\nINNER JOIN receipt_products ON receipts.id = receipt_products.receipt\nINNER JOIN products ON receipt_products.id = products.id\nGROUP BY receipts.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "y7j9yn0f",
    "name": "total_order_cost",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("jay8znlv")

  return dao.saveCollection(collection)
})
