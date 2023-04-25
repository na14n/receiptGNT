migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y5sg7y650lhyu6l")

  collection.options = {
    "query": "SELECT\nreceipt_products.id,\nreceipt_products.receipt,\nSUM(products.prod_price * receipt_products.qty) as total_orders\nFROM\nreceipt_products\nJOIN products on receipt_products.product = products.id\nGROUP BY receipt_products.receipt "
  }

  // remove
  collection.schema.removeField("gwnoosdq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qma9mg8w",
    "name": "total_orders",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y5sg7y650lhyu6l")

  collection.options = {
    "query": "SELECT\nreceipt_products.id,\nreceipt_products.receipt,\nSUM(products.prod_price * receipt_products.qty) as total_orders\nFROM\nreceipt_products\nJOIN products on receipt_products.product = products.id\nGROUP BY receipt_products.receipt"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gwnoosdq",
    "name": "total_orders",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("qma9mg8w")

  return dao.saveCollection(collection)
})
