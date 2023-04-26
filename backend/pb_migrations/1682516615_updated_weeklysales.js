migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1yqpsq6hfbl95m1")

  collection.options = {
    "query": "SELECT \n  (ROW_NUMBER() OVER()) as id,\n  email \nFROM users;"
  }

  // remove
  collection.schema.removeField("smriwwea")

  // remove
  collection.schema.removeField("sxmazcyc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "q0ffk9w4",
    "name": "email",
    "type": "email",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1yqpsq6hfbl95m1")

  collection.options = {
    "query": "SELECT \n  (ROW_NUMBER() OVER()) as id,\n  STRFTIME('%W', receipts.created) as week_number,\nSUM(receipt_products.qty * products.prod_price) as total_sales\nFROM receipts, receipt_products, products\nWHERE receipts.id = receipt_products.receipt\nAND receipt_products.product = products.id\nGROUP BY week_number"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "smriwwea",
    "name": "week_number",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sxmazcyc",
    "name": "total_sales",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("q0ffk9w4")

  return dao.saveCollection(collection)
})
