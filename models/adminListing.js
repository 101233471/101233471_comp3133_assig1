const mongoose = require('mongoose')
const Schema = mongoose.Schema

const adminListingSchema = new Schema({
    listing_id: {
        required: true,
        type: String
    },
    listing_title: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String,
        maxlength: 1000
    },
    street: {
        required: true,
        type: String
    },
    city: {
        required: true,
        type: String
    },
    postal_code: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: Number
    },
    email: {
        type: String
    },
    username: {
        type: String
    },
        
}, {timestamps: true})

const adminListing = mongoose.model('adminListing', adminListingSchema)
module.exports = adminListing