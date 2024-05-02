import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: String,
    roll_no: Number,
    wad_marks: Number,
    cns_marks: Number,
    cc_marks: Number,
    dsbda_marks: Number
})

export default mongoose.model('student',studentSchema )