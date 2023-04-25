migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fe3c1t763fi7sn3")

  collection.listRule = ""
  collection.viewRule = ""

  // remove
  collection.schema.removeField("xrzij0nf")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fe3c1t763fi7sn3")

  collection.listRule = null
  collection.viewRule = null

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

  // remove
  collection.schema.removeField("wyz8zxdb")

  return dao.saveCollection(collection)
})
