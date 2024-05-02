import song from '../models/schema.js';

export const displayall = async (req,res) =>{
    const music = await song.find({});

    var html=`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Display Data</title>
        <style>tr,td,th {border:1px solid black;}</style>
    </head>
    <body>
        <table>
            <tr>
                <th>ID</th>
                <th>Song Name</th>
                <th>Film Name</th>
                <th>Music Director</th>
                <th>Singer</th>
                <th>Actor</th>
                <th>Actress</th>
            </tr>
    `;

    for(const son of song)
    {
        html+= `<tr>
                    <td>${son._id}</td>
                    <td>${son.song_name}</td>
                    <td>${son.film}</td>
                    <td>${son.music_director}</td>
                    <td>${son.singer}</td>
                    <td>${son.actor}</td>
                    <td>${son.actress}</td>

                </tr>
        `;
    }

    html+= `
    </table>
    </body>
    </html>
    `;

    res.send(html);
}

export const updatelist = async (req,res) =>{
    
}

export const deletesong = async (req,res) =>{
    
}