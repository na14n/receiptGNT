migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bo8kj5a8fbcff3y")

  collection.options = {
    "query": "SELECT\n  receipt_products.qty,\n  receipt_products.product,\n  products.prod_price,\n  products.id,\n  (receipt_products.qty * products.prod_price) as subtotal\nFROM receipt_products\nJOIN products on receipt_products.product = products.id\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6dznmzcm",
    "name": "subtotal",
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
    "query": "SELECT\n  receipt_products.qty,\n  receipt_products.product,\n  products.prod_price,\n  products.id\nFROM receipt_products\nJOIN products on receipt_products.product = products.id\n"
  }

  // remove
  collection.schema.removeField("6dznmzcm")

  return dao.saveCollection(collection)
})
