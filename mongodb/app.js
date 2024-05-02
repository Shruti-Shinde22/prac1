import express from 'express';
import bodyParser from 'body-parser';
import { connecttodb } from './db.js';

import {addstudentmarks} from './controllers/addmarks.js'
import { getalldocs, getlessthan40, getstudsfordsbdsmorethan20, getstudscoreabove25} from './controllers/stats.js';
import { deletestudents, displaystudent, updatemarks} from './controllers/crud.js';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send('Hello world');
});

app.post('/addmarks', addstudentmarks);

app.get('/getalldocs', getalldocs);

app.get('/getstudsfordsbdsmorethan20', getstudsfordsbdsmorethan20);

app.patch('/updatemarks', updatemarks);

app.get('/getstudsscoresbove25', getstudscoreabove25)

app.get('/getlessthan40', getlessthan40);

app.delete('/deletestudent',deletestudents);

app.get('/display', displaystudent);

app.listen(3000, () => {
  console.log('App running on port 3000');
  connecttodb();
});
