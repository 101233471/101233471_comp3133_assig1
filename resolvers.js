const User = require('./models/user');
const bookListing = require('./models/bookListings');
const adminListing = require('./models/adminListing');

const resolvers = {
    Query: {
        getAdminListing: async (parent, args, context, info) => {    
            return await Listing.find({title: args.title});                                                                                   
          },                                                                                                                                 
          getAdminListingByCity: async (parent, args, context, info) => {                                                                          
            return await Listing.find({city: args.city});                                                                             
          },                                                                                                                                 
          getAdminListingByPostalCode: async (parent, args, context, info) => {                                                                     
            return await Listing.find({postal_code: args.postal_code});                                                                        
          },    
          getBookListing: async (parent, args, context, info) => {                                                                           
            return await Booking.find({username: args.username});                                                                              
          },                                                                                                                                   
          getListingByAdmin: async (parent, args, context, info) => {                                                                          
            if(args.type !== 'admin')                                                                                                          
              return null;                                                                                                                     
            return await Listing.find({username: args.username});    
          },
    },
    Mutation: {
        createUser: async (parent, args, context, info) => {
            const user = new User(args);
            await user.save();
            return user;
        },

/*
    login: async (_, { username }, { dataSources }) => {
      const user = await dataSources.userAPI.findOrCreateUser({ username });
      if (user) {
        user.token = Buffer.from(username).toString('base64');
        return user;
      }
    },
*/
    createBookingListing: async(parent, args, context, info) => {
        const booking = new BookingListing(args.BookingsListing);
        await booking.save()
        return booking;
    },
    createAdminListing: async(parent, args, context, info) => {
        const listing = new Listing(args.listing);
        await listing.save();
        return listing;
    }
}

};
module.exports = { resolvers };