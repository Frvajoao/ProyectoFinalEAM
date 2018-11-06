let moongoose = require('mongoose');
let Schema = moongoose.Schema;

let PlaceSchema = Schema({
name: {
        type: String,
        rquired: true
},
description: String,
location: {
        type: String,
        rquired: true
}
});

module.exports = moongoose.model('Place', PlaceSchema);
