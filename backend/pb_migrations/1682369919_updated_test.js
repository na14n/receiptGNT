migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fe3c1t763fi7sn3")

  collection.options = {
    "query": "SELECT\n    products.id,\n    SUM(receipt_products.qty) as total_orders\nFROM products\nJOIN receipt_products on products.id = receipt_products.product\nGROUP BY products.id\n\n\n"
  }

  // remove
  collection.schema.removeField("wxioow8k")

  // remove
  collection.schema.removeField("7figoxri")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9bwyn8bl",
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

  collection.options = {
    "query": "SELECT\n    receipt_products.id,\n    receipt_products.product,\n    receipt_products.qty\nFROM receipt_products\n\n\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wxioow8k",
    "name": "product",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "zxcjlr5b5uxd2jo",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "prod_name"
      ]
    }
  }))

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

  // remove
  collection.schema.removeField("9bwyn8bl")

  return dao.saveCollection(collection)
})
