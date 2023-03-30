migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k19x2sfw8qbtyko")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bgjwfl6u",
    "name": "r_id",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k19x2sfw8qbtyko")

  // remove
  collection.schema.removeField("bgjwfl6u")

  return dao.saveCollection(collection)
})
