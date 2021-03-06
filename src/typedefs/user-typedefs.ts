export const UserTypeDef = `
    type User {
        id: Int!
        username: String!
        firstName: String
        lastName: String
        roleId: Int!
    }

    type Token {
        token: String!
    }

    input LoginInput {
        username: String!
        password: String!
    }

    input SignUpInput {
        username: String!
        password: String!
        firstName: String
        lastName: String
        roleId: Int!
    }

    input UpdateInput {
        username: String
        firstName: String
        lastName: String
        roleId: Int
    }

    type Query {
        login(input: LoginInput!): Token!
        logout: Boolean
        authenticate: User!
        getUsers: [User]
        getUserById(id: Int!): User
    }

    type Mutation {
        signup(input: SignUpInput!): User!
        updateUserById(id: Int!, input: UpdateInput): User!
        deleteUserById(id: Int!): User!
    }
`;
