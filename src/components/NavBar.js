import React, { useState } from 'react'

function NavBar(props) {
    let { shortenArray } = props;
    const [languageInput, setLanguageInput] = useState("");
    const [nameInput, setNameInput] = useState();

    let langInputHandler = (e) => {
        setLanguageInput(e.target.value);
        shortenArray("language", e.target.value);
    }

    let nameInputHandler = (e) => {
        console.log(e);
        setNameInput(e.target.value);
        shortenArray("full_name", e.target.value);
    }

    return (
        <div className='h-20 flex items-center justify-start px-5 shadow-xl'>
            <h1 className='text-3xl font-bold mx-5'>Github Repos</h1>
            <div>Search with Language: </div>
            <input type="text" className='border mx-5 px-2' value={languageInput} onChange={langInputHandler} />
            <div>Search with Name: </div>
            <input type="text" className='border mx-5 px-2' value={nameInput} onChange={nameInputHandler} />
        </div>
    )
}

export default NavBar