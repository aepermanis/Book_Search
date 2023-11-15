const typeDefs = `
  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookid: Int
    authors: [String!]
    description: String!
    title: String!
    image: URL!
    link: URL!
  }
  
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(email: String!, password: String!, username: String!): Auth
    saveBook(BookAuthors: Array!, description: String!, title: Sting!, bookId: ID!, image: URL!, link: URL!): User
    removeBook(bookdId: ID!): User
  }
`;

module.exports = typeDefs;
