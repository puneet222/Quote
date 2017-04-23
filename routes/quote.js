var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');

var Quote = require('../models/Quote');
var QuoteRouter = express.Router() ;
QuoteRouter.use(bodyParser.json()) ;

QuoteRouter.route('/')
.get(function (req, res) {
    console.log("dsjbdsjk") ;
    Quote.find({} , function (err, quote) {
        if(err){
            console.log("ERROR ---> ",err) ;
        }
        res.status(200).json({
            status: "Success",
            success: true,
            quote: quote
        });
    });
});

QuoteRouter.route('/')
    .post(function (req, res) {
        Quote.create(req.body , function (err, quote) {
            if(err){
                console.log("ERROR ---> ",err) ;
            }
            res.status(200).json({
                status: "Success",
                success: true,
                quote: quote
            });
        });
    });

QuoteRouter.route('/')
    .delete(function (req, res) {
        Quote.remove({'_id' : req.body._id} , function (err, quote) {
            if(err){
                console.log("ERROR ---> ",err) ;
            }
            res.writeHead(200, {
                'Content-type': 'text/plain'
            });
            res.end('Delete the quote with id : ' + req.body._id) ;
        });
    });

QuoteRouter.route('/update')
    .post(function (req, res) {
        Quote.findByIdAndUpdate(req.body._id , req.body , function (err, quote) {
            if(err){
                console.log("ERROR ---> ",err) ;
            }
            res.status(200).json({
                status: "Success",
                success: true,
                quote: req.body
            });
        });
    });

module.exports = QuoteRouter ;