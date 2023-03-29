migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0rgtj1sm8n6o0js")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "r93cwxwk",
    "name": "user",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "username"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0rgtj1sm8n6o0js")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "r93cwxwk",
    "name": "field",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "username"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
