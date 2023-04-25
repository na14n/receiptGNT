migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bo8kj5a8fbcff3y")

  collection.options = {
    "query": "SELECT\n  receipt_products.qty,\n  receipt_products.product,\n  products.prod_price,\n  products.id\nFROM receipt_products\nJOIN products on receipt_products.product = products.id\n"
  }

  // remove
  collection.schema.removeField("jay8znlv")

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
    "id": "rrwgrovv",
    "name": "prod_price",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bo8kj5a8fbcff3y")

  collection.options = {
    "query": "SELECT \n  receipts.id, \n  SUM(products.prod_price * receipt_products.qty) as total_order_cost\nFROM receipts\nINNER JOIN receipt_products on receipts.id = receipt_products.receipt\nINNER JOIN products on receipt_products.id = products.id\nGROUP BY receipts.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jay8znlv",
    "name": "total_order_cost",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("7figoxri")

  // remove
  collection.schema.removeField("wxioow8k")

  // remove
  collection.schema.removeField("rrwgrovv")

  return dao.saveCollection(collection)
})
