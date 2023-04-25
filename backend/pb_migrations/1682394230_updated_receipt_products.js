migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("51ihkkmnnrcl4l4")

  collection.indexes = []

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("51ihkkmnnrcl4l4")

  collection.indexes = [
    "CREATE UNIQUE INDEX `tsting` ON `receipt_products` (`created`)"
  ]

  return dao.saveCollection(collection)
})
