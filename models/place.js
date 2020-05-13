const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ['coffee_shop', 'bookstore'] 
      }
    },
      {
        timestamps: {
          createdAt: 'createdDate',
          updatedAt: 'updatedDate'
        }
    }
);

//to use geolocation, need to create a special \ costum index

placeSchema.index({location: '2dshpere'});

// create model

const Place = mongoose.model('Restaurant', placeSchema);

module.exports = Place;

    // location: {
    //     type: {
    //         type: String, 
    //         default: 'Point'
    //     }, 
    //     coordinates: [
    //         {
    //             type: Number, 
    //             min: -180, 
    //             max: 180
    //         }
    //     ]
    // }