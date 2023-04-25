migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fe3c1t763fi7sn3")

  collection.options = {
    "query": "SELECT\n    receipt_products.id,\n    receipt_products.product,\n    receipt_products.qty\nFROM receipt_products\n\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7figoxri",
    "name": "qty",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fe3c1t763fi7sn3")

  collection.options = {
    "query": "SELECT\n    receipt_products.id,\n    receipt_products.product\nFROM receipt_products\n"
  }

  // remove
  collection.schema.removeField("7figoxri")

  return dao.saveCollection(collection)
})
