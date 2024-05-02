import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json());

app.use(cors({
    origin: '*'
}))

app.get('/', ()=>{
    console.log('Hello World')
})

app.post('/addsongs', addsongs);

app.get('/displaylist', displaylist);

app.get('/listspecificdirectorsongs', listspecificdirectorsong);

app.get('/specifiedsingersong', specifiedsingersong);

app.delete('/deletesong', deletesong);

app.get('/specifiedsongfromspecifiedfilm', specifiedsongfromspecifiedfilm);

app.patch('/update', updatelist);

app.get('/display', displayall);

app.listen(3000, ()=>{
    console.log('App running on 3000');
})