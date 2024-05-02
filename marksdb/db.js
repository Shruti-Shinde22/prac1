import mongoose from 'mongoose';

const url=`mongodb+srv://Shruti:shruti1@cluster0.bkxdm5w.mongodb.net/dbassignment?retryWrites=true&w=majority&appName=Cluster0`;

const connettodb = ()=>{
    mongoose.connect(url)
    .then(()=>{
        console.log('Db connected');
    }).catch(err=>{
        console.log('Error in conenction');
        console.log(err);
    })
}

export{ connettodb}