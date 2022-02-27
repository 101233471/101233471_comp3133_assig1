const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookListingSchema = new Schema({
    listing_id: {
        required: true,
        type: String
    },
    booking_id: {
        required: true,
        type: String
    },
    booking_date: {
        required: true,
        type: Date
    },
    booking_start: {
        required: true,
        type: Date
    },
    booking_end: {
        required: true,
        type: Date
    },
    username: {
        type: String
    },
        
}, {timestamps: true})

const bookListing = mongoose.model('bookListing', bookListingSchema)
module.exports = bookListing