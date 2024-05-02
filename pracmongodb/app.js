import express from 'express';
import bodyParser from 'body-parser';
import { connect_to_db } from './db.js';

import {addmarks} from './controller/addmarks.js';
import { getalldocs, dsbdagt20, lt40,above25 } from './controller/stats.js';
import { delstudent, updatemarks,displayall } from './controller/crud.js';
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

app.get('/', (req,res)=>{
    res.send('Hello World');
})

app.post('/addmarks', addmarks);

app.get('/getalldocs', getalldocs);

app.get('/dsbdagt20', dsbdagt20);

app.get('/above25', above25);

app.patch('/updatemarks', updatemarks);

app.get('/lt40', lt40);

app.delete('/delete', delstudent);

app.get('/display', displayall);

app.listen(3000, ()=>{
    console.log('App running on 3000');
    connect_to_db();
})