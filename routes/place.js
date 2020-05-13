const express = require('express');
const Place = require('././../models/place');
const placeRouter = new express.Router();

//route to list all places
placeRouter.get('/list', (req, res, next) =>{
    Place.find()
    .then(places => {
        res.render('place/list', {places});
    })
});


//route to create place
placeRouter.get('/create', (req, res, next) =>{
    res.render('place/create');
});

placeRouter.post('/create', (req, res, next) =>{
    console.log(req.body);
    const name = req.body.name;
    const type = req.body.type;
    
    // create documento for place
    Place.create({
        name,
        type 
        // location: {
            //     coordinates: [longitude, latitude]
            // }
        })
        // get document
        .then(place => {
            res.redirect('/place/list')
        })
        .catch(error => {
            next(error);
        });
        
    });
    
    //route to load one place
    placeRouter.get('/:placeId', (req, res, next) =>{
        const placeId = req.params.placeId
    
        Place.findById(placeId)
        .then(place => {
            res.render('place/single', {place});
        });
    });
    
    
    module.exports = placeRouter;