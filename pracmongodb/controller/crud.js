import student from '../models/schema.js';

export const updatemarks = async (req,res) =>{
    const {roll_no} = req.body;
    const result = await student.findOneAndUpdate(
        {roll_no: roll_no},
        {$inc: {dsbda_marks: 10, wad_marks: 10, cc_marks: 10, cns_marks:10}},
        {new: true})
    res.json('Updates!!')
}

export const displayall = async (req,res) =>{
    const students = await student.find({});
    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>UI>/title>
    </head>
    <table>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Roll No</th>
            <th>WAD</th>
            <th>CNS</th>
            <th>CC</th>
            <th>DSBDA</th>
        </tr>
    `;

    for(const stud of students)
    {
        html += `<tr><td>${stude._id}</td>
        <td>${stude.name}</td>
        <td>${stude.roll_no}</td>
        <td>${stude.wad_marks}</td>
        <td>${stude.cns_marks}</td>
        <td>${stude.cc_marks}</td>
        <td>${stude.dsbda_marks}</td>
        `;
    }

    html+= `
    </table>
    </body>
    </html>
    `;

    res.send(html)
}

export const delstudent = async (req,res) =>{
    const students = await student.findOneAndDelete({roll_no: req.bod.roll_no})
    res.json("Done")
}