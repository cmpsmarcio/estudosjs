const { ApolloServer, gql } = require('apollo-server')
const { importSchema } = require('graphql-import')
const resolvers = require('./resolvers') //Automaticamente ele irá ler o index.js se não for colocado o nome do arquivo
const schemaPath = './schema/index.graphql'

const server = new ApolloServer({
    typeDefs: importSchema(schemaPath),
    resolvers: resolvers
})

server.listen().then(({ url }) => {
    console.log(`Executando em ${url}`)
})