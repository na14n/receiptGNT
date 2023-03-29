migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0rgtj1sm8n6o0js")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "owqsegu0",
    "name": "b_name",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": 1,
      "max": 64,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sjwi5vqe",
    "name": "b_address",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 64,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vymgkwcf",
    "name": "b_contact",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 64,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0rgtj1sm8n6o0js")

  // remove
  collection.schema.removeField("owqsegu0")

  // remove
  collection.schema.removeField("sjwi5vqe")

  // remove
  collection.schema.removeField("vymgkwcf")

  return dao.saveCollection(collection)
})
