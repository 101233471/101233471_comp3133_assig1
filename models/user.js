const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        required: true,
        minlength: 6,
        match: /([A-Z]|[a-z]|[0-9]|\#|\$|\&|\_)/,
        type: String
    },
    firstname: {
        required: true,
        type: String
    },
    lastname: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String,
        match: /.+\@.+\..+/
    },
        
}, {timestamps: true})

const user = mongoose.model('user', userSchema)

const resolvers = {
    Query: {
        getUsers: async () => {
            return await User.find();
        }
    }
}

module.exports = user