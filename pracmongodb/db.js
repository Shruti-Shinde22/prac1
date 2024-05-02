import mongoose from "mongoose";

const url = `mongodb+srv://Shruti:shruti1@cluster0.bkxdm5w.mongodb.net/dbassignment?retryWrites=true&w=majority&appName=Cluster0`

export const connect_to_db = () =>{
    mongoose.connect(url)
    .then(() =>{
        console.log('DB connected')
    }).catch(err =>{
        console.log('Error in connection')
        console.log(err)
    })
}

