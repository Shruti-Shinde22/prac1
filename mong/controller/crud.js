import songs from '../models/schema.js';

export const displayall = async (req,res)=>{
    const song = await songs.find({});

    var html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Display Data</title>
    </head>
    <body>
        <table>
            <tr>
                <th>Song Name</th>
                <th>Film Name</th>
                <th>Music Director</th>
                <th>Singer</th>
                <th>Actor</th>
                <th>Actress</th>
            </tr>
    `;

    for(const song of songs)
    {
        html+= `
            <tr>
                <td>${song.songname}</td>
                <td>${song.film}</td>
                <td>${song.music_director}</td>
                <td>${song.singer}</td>
                <td>${song.actor}</td>
                <td>${song.actress}</td>
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

// export const updatelist = async (req,res)=>{
//     const song = await songs.findOneAndUpdate(
//         {songname: songname}
//         {$}
//     )
// }

export const deletesong = async (req,res)=>{
    const {song_id} = req.params;
    await songs.findOneAndDelete({_id: song_id});
    res.json('Deleted Succesfully')
}