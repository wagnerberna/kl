const { ObjectId } = require('mongodb');
const { conn } = require('./connection');

const updateStatement = async (id, description, amount, type, date) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }
  const deposit = await conn().then((db) => db.collection('customers')
    .updateOne({ _id: ObjectId(id) }, {
      $addToSet: {
        statement: {
          description, amount, type, date,
        },
      },
    }));
  return { deposit };
};

module.exports = {
  updateStatement,
};
