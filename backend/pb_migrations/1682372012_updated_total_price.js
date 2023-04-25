migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bo8kj5a8fbcff3y")

  collection.name = "subtotals"

  // remove
  collection.schema.removeField("6dznmzcm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fjkzv4ao",
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

  collection.name = "total_price"

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

  // remove
  collection.schema.removeField("fjkzv4ao")

  return dao.saveCollection(collection)
})
