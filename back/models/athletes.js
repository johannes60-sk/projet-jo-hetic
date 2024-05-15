const mongoose = require('mongoose');

const athleteSchema = mongoose.Schema({
    athlete_full_name: String,
    athlete_url: String,
    game_participations: Number,
    first_game: String,
    athlete_year_birth: Number,
    athlete_medals: Number,
    bio: String,
});