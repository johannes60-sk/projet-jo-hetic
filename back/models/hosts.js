const mongoose  = require('mongoose');

const hostSchema = mongoose.Schema({
    game_slug: String,
    game_end_date: Date,
    game_start_date: Date,
    game_location: String,
    game_name: String,
    game_season: String,
    game_year: Number,
});

module.exports = mongoose.model('hosts', hostSchema);