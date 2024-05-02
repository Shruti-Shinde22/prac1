import StudentMarks from '../models/schema.js'

export const getalldocs = async (req,res) =>{
    const result = await StudentMarks.find({});
    const count = await StudentMarks.find({}).countDocuments();
    var data = `Count of Students ${count} <br/><br/>`;
    for(const stud of result)
    {
        data+= `${stud.name} - ${stud.roll_no}<br/>`
    }

    res.send(data);
}

export const getstudsfordsbdsmorethan20 = async (req,res) =>{
    const result = await StudentMarks.find({'dsbda_marks' : {$gt: 20}});
    var data = "";
    for(const stud of result)
    {
        data+=`${stud.name} - ${stud.roll_no}<br/>`
    }
    res.send(data);
}

export const getstudscoreabove25 = async (req,res) =>{
    const result = await StudentMarks.find({
        wad_marks: {$gt:25},
        cns_marks: {$gt:25},
        dsbda_marks: {$gt:25},
        cc_marks: {$gt:25},
    });

    var data="";
    for(const stud of result)
    {
        data+= `${stud.name} - ${stud.roll_no}<br/>`;
    }

    res.send(data);
}

export const getlessthan40 = async (req,res)=>{
    const result = await StudentMarks.find({
        wad_marks: {$lt: 30},
        cc_marks: {$lt:30},
    })   

    var data = " ";
    for(const stud of result)
    {
        data+= `${stud.name}- ${stud.roll_no}<br/>`
    }
    res.send(data);
}