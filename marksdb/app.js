import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { connettodb } from './db.js';
import { addmarks, getalldocs, updateall, lt40, gt25, dsbdagt20, display, deletestud } from './controller/crud.js';
const app = express();

app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(bodyParser.json())

app.use(cors());

app.get('/', (req,res)=>{
    res.send('hello World')
})

app.post('/addmarks', addmarks)

app.get('/getalldocs', getalldocs)

app.patch('/updateall', updateall)

app.get('/gt25', gt25)

app.get('/lt40', lt40)

app.get('/display', display)

app.delete('/delete', deletestud)

app.get('/dsbdagt20', dsbdagt20)

app.listen(3000, ()=>{
    console.log('App running on 3000')
    connettodb();
})
