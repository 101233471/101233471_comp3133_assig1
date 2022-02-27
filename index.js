// Resolvers define the technique for fetching the types defined in the

const user = require("./models/user");

// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
      user: () => user,
    },
  };

