import student from '../models/schema.js';

export const addmarks = async (req,res) =>{
    const {docs} = req.body;
    const parsed_docs = JSON.parse(docs);
    await student.insertMany(parsed_docs);
    res.json("Data Added")
}