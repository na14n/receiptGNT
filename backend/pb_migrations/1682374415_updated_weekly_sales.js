migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ykeinkjntsl7nzj")

  collection.listRule = ""
  collection.viewRule = ""

  // remove
  collection.schema.removeField("pykkmlwy")

  // remove
  collection.schema.removeField("36tqsqfd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mtqle2ck",
    "name": "week",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wnlnesyw",
    "name": "total_sales",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ykeinkjntsl7nzj")

  collection.listRule = null
  collection.viewRule = null

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pykkmlwy",
    "name": "week",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "36tqsqfd",
    "name": "total_sales",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("mtqle2ck")

  // remove
  collection.schema.removeField("wnlnesyw")

  return dao.saveCollection(collection)
})
