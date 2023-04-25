migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("51ihkkmnnrcl4l4")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_qDt2aaf` ON `receipt_products` (`created`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("51ihkkmnnrcl4l4")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_qDt2aaf` ON `receipt_products` (\n  `created`,\n  `receipt`\n)"
  ]

  return dao.saveCollection(collection)
})
