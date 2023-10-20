// index.html
import { useState } from 'react';
function Header(props) {
    return (
        <>
            <h1>{props.title}</h1>
        </>
    )
}

export default function HomePage() {
    const names = ['Rodgers', 'Omondi', 'Nyangweso']
    function handleClick() {
        console.log("Something, something")
    }
    return (
        <>
            <div>
                <Header title="Rodgers Nyangweso" />
                <ul>
                    {names.map((name) => (
                        <li key={name}>{name}</li>
                    ))}
                </ul>
            </div>
            <button onClick={handleClick}>Like</button>
        </>
    )
}