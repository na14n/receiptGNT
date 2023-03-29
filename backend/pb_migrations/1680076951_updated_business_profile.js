migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0rgtj1sm8n6o0js")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fdvirfyr",
    "name": "field",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5000000,
      "mimeTypes": [
        "image/png",
        "image/jpeg"
      ],
      "thumbs": [
        "100x100"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0rgtj1sm8n6o0js")

  // remove
  collection.schema.removeField("fdvirfyr")

  return dao.saveCollection(collection)
})
