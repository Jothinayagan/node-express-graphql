const { userList } = require("../../user");

const resolvers = {
  Query: {
    getAllUsers() {
      return userList;
    },
  },
};

module.exports = { resolvers };
