import mongoose from "mongoose";

const musicSchema = new mongoose.Schema({
    song_name: String,
    film: String,
    music_director: String,
    singer: String,
    actor: String,
    actress: String
})

export default mongoose.model('song', musicSchema);