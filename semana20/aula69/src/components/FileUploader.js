import React, { useState } from 'react';
import axios from 'axios';

export const FileUploader = () => {

    const [link, setLink] = useState(undefined)

    const handleFile = async (event) => {
        try {
            const data = new FormData();
            data.append('file', event.target.files[0])

            const res = await axios.put('https://g5vr718si2.execute-api.us-east-1.amazonaws.com/dev/files/upload', data);
            setLink(res.data.link)
        } catch (e) {
            console.log(e.message)
        }
    }
    return (
        <div>
            <input type={'file'} onChange={handleFile} />
            {link && (
                <div>
                    <img src={link} alt={'Minha imagem'} />
                    <p><a href={link}>Link para o arquivo</a></p>
                </div>
            )}
        </div>
    )
}