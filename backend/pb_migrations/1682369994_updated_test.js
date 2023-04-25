migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fe3c1t763fi7sn3")

  collection.options = {
    "query": "SELECT\n    products.id,\n    SUM(receipt_products.qty) as total_orders\nFROM products\nJOIN receipt_products on products.id = receipt_products.product\nGROUP BY products.id, products.user\n\n\n"
  }

  // remove
  collection.schema.removeField("9bwyn8bl")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yfkbrhog",
    "name": "total_orders",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fe3c1t763fi7sn3")

  collection.options = {
    "query": "SELECT\n    products.id,\n    SUM(receipt_products.qty) as total_orders\nFROM products\nJOIN receipt_products on products.id = receipt_products.product\nGROUP BY products.id\n\n\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9bwyn8bl",
    "name": "total_orders",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("yfkbrhog")

  return dao.saveCollection(collection)
})
