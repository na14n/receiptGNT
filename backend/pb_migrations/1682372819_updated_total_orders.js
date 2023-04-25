migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fe3c1t763fi7sn3")

  collection.options = {
    "query": "SELECT\n    products.id, \n    products.prod_name,\n    products.user,\n    SUM(receipt_products.qty) as total_orders\nFROM products\nJOIN receipt_products on products.id = receipt_products.product\nGROUP BY products.id, receipt_products.created\n\n\n"
  }

  // remove
  collection.schema.removeField("cp9m9fj3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kopc1nkv",
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
    "query": "SELECT\n    products.id, \n    products.prod_name,\n    products.user,\n    SUM(receipt_products.qty) as total_orders\nFROM products\nJOIN receipt_products on products.id = receipt_products.product\nGROUP BY products.id\n\n\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cp9m9fj3",
    "name": "total_orders",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("kopc1nkv")

  return dao.saveCollection(collection)
})
