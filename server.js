const { ApolloServer, gql } = require('apollo-server-express');
const mongoose = require('mongoose')


const user = require('./models/user')
const listing = require('./models/adminListing')
const bookListing = require('./models/bookListings')
const { typeDefs } = require('./typedefs')
const { resolvers } = require('./resolvers')

const app = require('express')()



//bodyparser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

/*

const isUsername = require('isusername');
const server = new ApolloServer({
  context: async ({ req }) => {   
    const auth = req.headers && req.headers.authorization || '';    
    const username = Buffer.from(auth, 'base64').toString('ascii');    
    if (!isUsername.validate(username)) 
    return { user: null };        
    const users = await store.users.findOrCreate({ where: { username } });    
    const user = users && users[0] || null;    
    return { user: { ...user.dataValues } };  
},  
});
*/

async function startServer() {
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers
    });

    await apolloServer.start();

    apolloServer.applyMiddleware({app});

    app.listen(4000, () => console.log('Server running at Port 4000'))

    //mongodb
var assign1db = "mongodb+srv://Nicole:Nic1974201@cluster0.3tmwe.mongodb.net/101233471_comp3133_assig1?retryWrites=true&w=majority"
await mongoose.connect(assign1db, { useNewUrlParser: true, useUnifiedTopology: true}) 
console.log("Connected to Database")
}

startServer();



