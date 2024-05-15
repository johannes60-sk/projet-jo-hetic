const mongoose = require('mongoose');

const medalSchema = mongoose.Schema({
    discipline_title: String,
    slug_game: String,
    event_title: String,
    event_gender: String,
    medal_type: String,
    participant_type: String,
    participant_title: String,
    athlete_url: String,
    athlete_full_name: String,
    country_name: String,
    country_code: String,
});

module.exports = mongoose.model('medals', medalSchema);