migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fe3c1t763fi7sn3")

  collection.options = {
    "query": "SELECT\n    products.id, \n    products.prod_name,\n    products.user,\n    receipt_products.created,\n    SUM(receipt_products.qty) as total_orders\nFROM products\nJOIN receipt_products on products.id = receipt_products.product\nGROUP BY products.id\n\n\n"
  }

  // remove
  collection.schema.removeField("kopc1nkv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xrzij0nf",
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
    "query": "SELECT\n    products.id, \n    products.prod_name,\n    products.user,\n    SUM(receipt_products.qty) as total_orders\nFROM products\nJOIN receipt_products on products.id = receipt_products.product\nGROUP BY products.id, receipt_products.created\n\n\n"
  }

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

  // remove
  collection.schema.removeField("xrzij0nf")

  return dao.saveCollection(collection)
})
