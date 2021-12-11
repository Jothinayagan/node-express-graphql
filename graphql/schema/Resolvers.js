const { userList } = require("../../user");

const resolvers = {
  Query: {
    getAllUsers() {
      return userList;
    },
  },
  Mutation: {
    addUser(parent, args) {
      const newUser = args;
      userList.push(newUser);

      return newUser;
    },
  },
};

module.exports = { resolvers };
