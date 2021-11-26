const mongoClient = require('mongodb').MongoClient;
require('dotenv').config();

const MONGO_DB_URL = process.env.DB_URL;
const DB_NAME_MONGO = process.env.DB_NAME;

const conn = async () => mongoClient.connect(MONGO_DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then((connection) => connection.db(DB_NAME_MONGO))
  .catch((err) => {
    console.error(err); // eslint-disable-line
    process.exit(1);
  });

module.exports = { conn };
