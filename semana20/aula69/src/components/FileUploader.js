import React, {useState} from 'react';
import axios from 'axios';

export const FileUploader = () => {

    const [link, setLink] = useState(undefined)

    const handleFile = async (event) =>{
        try{
            const data = new FormData();
            data.append('file', event.target.files[0])

            const res = await axios.put('https://g5vr718si2.execute-api.us-east-1.amazonaws.com/dev', data);
            setLink(res.data.link)
        }catch(e){
            console.log(e.message)
        }
    }
    return(
        <>
            <input type={'file'} onChange={handleFile}/>
            <img src={link}></img>
            <p><a href={link}>Link do arquivo</a></p>
        </>
    )
}