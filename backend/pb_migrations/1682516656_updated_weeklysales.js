migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1yqpsq6hfbl95m1")

  collection.name = "emails"

  // remove
  collection.schema.removeField("zxs4oaa0")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "osmqsin5",
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

  collection.name = "weeklysales"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zxs4oaa0",
    "name": "email",
    "type": "email",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // remove
  collection.schema.removeField("osmqsin5")

  return dao.saveCollection(collection)
})
