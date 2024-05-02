import StudentMarks from '../models/schema.js';

export const updatemarks = async(req,res)=>{
    const{roll_no} = req.body;
    const result = await StudentMarks.findOneAndUpdate(
        {roll_no: roll_no},
        {$inc: {dsbda_marks:10, wad_marks: 10, cc_marks:10}},
        {new: true})
    res.json({result});
}

export const displaystudent = async (req,res) => {
    const students = await StudentMarks.find({});

    var html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Table UI</title>
        <style>tr,td,th {border:1px solid black;}</style>
    </head>
    <body>
        <table border="1">
            <tr>
                <th>Name</th>
                <th>Roll No</th>
                <th>WAD</th>
                <th>CNS</th>
                <th>CC</th>
                <th>DSBDA</th>
            </tr>           


    `;

    for (const stud of students) {
        html += `
            <tr>
                <td>${stud.name}</td>
                <td>${stud.roll_no}</td>
                <td>${stud.wad_marks}</td>
                <td>${stud.cns_marks}</td>
                <td>${stud.cc_marks}</td>
                <td>${stud.dsbda_marks}</td>
            </tr>`;
    }
    

    html+= `</table>
    </body>
    </html>
    `;

    res.send(html)
}

export const deletestudents = async (req,res) =>{
    await StudentMarks.findOneAndDelete({roll_no:req.body.roll_no})
    res.send('done')
}