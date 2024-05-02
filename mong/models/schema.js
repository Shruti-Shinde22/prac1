import mongoose, { mongo } from "mongoose";

const musicSchema = new mongoose.Schema({
    songname: String,
    film: String,
    music_director: String,
    singer: String,
    actor: String,
    actress: String,
})

export default mongoose.model('songs',musicSchema);