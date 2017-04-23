var mongoose = require('mongoose') ;
var Schema = mongoose.Schema ;

var Quote = new Schema({
  quote: {
    type: String
  },
  by: {
    type: String
  },
  backgroundColor:{
    type: String
  }
},{
  timestamp: true
},{
  strict : false
}) ;

module.exports = mongoose.model("Quote" , Quote , "Quote") ;
