migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fe3c1t763fi7sn3")

  collection.options = {
    "query": "SELECT\n    products.id, \n    products.prod_name,\n    products.prod_price,\n    products.user,\n    receipt_products.created,\n    SUM(receipt_products.qty) as total_orders\nFROM products\nJOIN receipt_products on products.id = receipt_products.product\nGROUP BY products.id\n\n\n"
  }

  // remove
  collection.schema.removeField("wyz8zxdb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rrwgrovv",
    "name": "prod_price",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qf8dso1w",
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
    "query": "SELECT\n    products.id, \n    products.prod_name,\n    products.user,\n    receipt_products.created,\n    SUM(receipt_products.qty) as total_orders\nFROM products\nJOIN receipt_products on products.id = receipt_products.product\nGROUP BY products.id\n\n\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wyz8zxdb",
    "name": "total_orders",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("rrwgrovv")

  // remove
  collection.schema.removeField("qf8dso1w")

  return dao.saveCollection(collection)
})
