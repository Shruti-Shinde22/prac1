import student from '../models/schema.js'

export const getalldocs = async (req,res)=>{
    const result = await student.find({});
    const count = await student.find({}).countDocuments();
    var data = `Count of Students ${count} <br/>`

    for(const stud of result)
    {
        data+= `${stud.name}-${stud.roll_no} <br/>`
    }

    res.send(data);
}

export const dsbdagt20 = async (req,res)=>{
    const result = await student.find({'dsbda_marks':{$gt: 20}});
    var data = "";
    for(const stud of result)
    {
        data+= `${stud.name}-${stud.roll_no} <br/>`
    }

    res.send(data);
}

export const lt40 = async (req,res)=>{
    const result = await student.find({
        'wad_marks':{$lt: 40},
        'cc_marks':{$lt: 40}
    });
    var data = "";
    for(const stud of result)
    {
        data+= `${stud.name}-${stud.roll_no} <br/>`
    }

    res.send(data);
}

export const above25 = async (req,res)=>{
    const result = await student.find({
        'wad_marks':{$gt: 25},
        'cns_marks':{$gt: 25},
        'cc_marks':{$gt: 25},
        'dsbda_marks':{$gt: 25}
    });
    var data = "";
    for(const stud of result)
    {
        data+= `${stud.name}-${stud.roll_no} <br/>`
    }

    res.send(data);
}