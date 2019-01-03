const mongoose = require("mongoose");
const Product = require ("../api/models/product")

mongoose.connect(
    "mongodb://node-shop:"+ process.env.MONGO_ATLAS_PW +"@cluster0-shard-00-00-yintm.mongodb.net:27017,cluster0-shard-00-01-yintm.mongodb.net:27017,cluster0-shard-00-02-yintm.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true",
    {
      useMongoClient: true
    }
  );
  mongoose.Promise = global.Promise;