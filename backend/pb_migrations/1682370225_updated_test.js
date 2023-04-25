migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fe3c1t763fi7sn3")

  collection.name = "total_orders"

  // remove
  collection.schema.removeField("kmkshh8h")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "w8envwp8",
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

  collection.name = "test"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kmkshh8h",
    "name": "total_orders",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("w8envwp8")

  return dao.saveCollection(collection)
})
