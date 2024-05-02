import mongoose from "mongoose";

const studschema = new mongoose.Schema({
    name: String,
    roll_no: Number,
    wad_marks: Number,
    cns_marks: Number,
    cc_marks: Number,
    dsbda_marks: Number
});

export default mongoose.model('studmarks', studschema);