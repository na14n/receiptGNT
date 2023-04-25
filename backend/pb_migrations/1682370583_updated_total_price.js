migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bo8kj5a8fbcff3y")

  collection.options = {
    "query": "SELECT \n  receipts.id, \n  SUM(products.prod_price * receipt_products.qty) as total_order_cost\nFROM receipts\nLEFT JOIN receipt_products on receipts.id = receipt_products.id\nLEFT JOIN products on receipt_products.product = products.id\nGROUP BY receipts.id"
  }

  // remove
  collection.schema.removeField("ihdglg49")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pq4oeu7k",
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
    "query": "SELECT \n  receipts.id, \n  SUM(products.prod_price * receipt_products.qty) as total_order_cost\nFROM receipts\nJOIN receipt_products on receipts.id = receipt_products.id\nJOIN products on receipt_products.product = products.id\nGROUP BY receipts.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ihdglg49",
    "name": "total_order_cost",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("pq4oeu7k")

  return dao.saveCollection(collection)
})
