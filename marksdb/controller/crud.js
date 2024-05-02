import studmarks from '../models/schema.js';

export const addmarks = async (req, res) => {
    const {docs} = req.body;
    const parsed_docs = JSON.parse(docs);
    await studmarks.insertMany(parsed_docs);
    res.json("Data added")
}

export const getalldocs = async (req,res)=>{
    const student = await studmarks.find({});
    const studcount = await studmarks.find({}).countDocument();

    var data = `Count of Students = ${studcount}<br/>`;
    for(const stud of student)
    {
        data+=`${stud.name} - ${stud.roll_no} <br/>`
    }

    res.send(data);
}

export const updateall = async (req,res)=>{
    const {roll_no} = req.body;
    const student = await studmarks.findOneAndUpdate(
        {roll_no:roll_no},
        {$inc : {dsbda_marks: 10, wad_marks: 10, cns_marks:10, cc_marks:10}},
        {new: true}
    )

    res.json('Updated!')
}

export const gt25 = async (req,res)=>{
    const student = await studmarks.find(
        {wad_marks: {$gt: 25},
        dsbda_marks: {$gt: 25},
        cns_marks: {$gt: 25},
        cc_marks: {$gt: 25}}
    );

    var data= "";

    for(const stud of student)
    {
        data+=`${stud.name}- ${stud.roll_no} <br/>`
    }

    res.send(data);
}

export const lt40 = async (req,res)=>{
    const student = await studmarks.find(
        {'wad_marks': {$lt: 40},
        'dsbda_marks': {$lt: 40}
    })
    var data= "";

    for(const stud of student)
    {
        data+=`${stud.name}- ${stud.roll_no} <br/>`
    }

    res.send(data);
}

export const display = async (req,res)=>{
    const student = await studmarks.find({});
    var html=`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Registration Form</title>
        <style>table{border: 1px solid black;} tr, td, th {border: 1px solid black; }</style>
    </head>
    <body>
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Roll no</th>
                <th>WAD</th>
                <th>CNS</th>
                <th>CC</th>
                <th>DSBDA</th>
            </tr>
    `;

    for(const stud of student)
    {
        html+= `
            <tr>
                <td>${stud._id}</td>
                <td>${stud.name}</td>
                <td>${stud.roll_no}</td>
                <td>${stud.wad_marks}</td>
                <td>${stud.cns_marks}</td>
                <td>${stud.cc_marks}</td>
                <td>${stud.dsbda_marks}</td>
            </tr>
        `;
    }

    html+=`
        </table>
        </body>
        </html>
    `;

    res.send(html);
}

export const deletestud = async (req,res)=>{
    await studmarks.findOneAndDelete({roll_no:req.body.roll_no})
    res.send('Deleted!');
}

export const dsbdagt20 = async (req,res)=>{
    const student = await studmarks.find(
        {'dsbda_marks': {$gt: 20}}
    );

    var data= "";

    for(const stud of student)
    {
        data+=`${stud.name}- ${stud.roll_no} <br/>`
    }

    res.send(data);
}