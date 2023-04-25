migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fe3c1t763fi7sn3")

  collection.options = {
    "query": "SELECT\n    receipt_products.id,\n    receipt_products.product,\n    receipt_products.qty\nFROM receipt_products\n\n\n"
  }

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fe3c1t763fi7sn3")

  collection.options = {
    "query": "SELECT\n    receipt_products.id,\n    receipt_products.product,\n    receipt_products.qty\nFROM receipt_products\n\n"
  }

  return dao.saveCollection(collection)
})
