import mongoose from "mongoose";

const url =`mongodb+srv://Shruti:shruti1@cluster0.bkxdm5w.mongodb.net/dbassignment?retryWrites=true&w=majority&appName=Cluster0`

const connectionParams ={
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

const connecttodb = () =>{
    mongoose.connect(url,connectionParams)
    .then(()=>{
        console.log('Db connection successfully')
    }).catch(err =>{
        console.log('Error while connecting to db')
        console.log(err)
    })
}

export {connecttodb}