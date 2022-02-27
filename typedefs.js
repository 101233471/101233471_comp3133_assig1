const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        username: String
        firstname: String
        lastname: String
        password: String
        email: String
        type: String
    }
    type adminListing {
        listing_id: String
        listing_title: String
        description: String
        street: String
        city: String
        postal_code: String
        price: Float
        email: String
        username: String
    }

    type BookListings {
        listing_id: String
        booking_id: String
        booking_date: String
        booking_start: String
        booking_end: String
        username: String
    }

    type Query{
        getAdminListing(username: String): [BookListings]
        getAdminListingByCity(city:String): [adminListing]
        getAdminListingByPostalCode(postal_code: String): [BookListings]
        getBookListing(username: String): [BookListings]
        getListingByAdmin(username: String, type:String): [adminListing]
    }

    input UserInput {
        username: String
        firstname: String
        lastname: String
        password: String
        email: String
        type: String
    }
    input adminListingInput {
        listing_id: String
        listing_title: String
        description: String
        street: String
        city: String
        postal_code: String
        price: Float
        email: String
        username: String
    }

    input BookListingsInput {
        listing_id: String
        booking_id: String
        booking_date: String
        booking_start: String
        booking_end: String
        username: String
    }
    type Mutation {
        createUser(user: UserInput) : User
        createAdminListing(adminListing: adminListingInput): adminListing
        createBookingListing(BookListings: BookListingsInput): BookListingsInput
    }
`;

module.exports = { typeDefs };