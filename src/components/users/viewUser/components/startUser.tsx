import axios from 'axios';


type Props={
    title?: string
}


export function Welcome({title="Welcome"}:Props){

    //TODO: WELCOME TO EXPLAIN HOW TO USE THE INTERFACE

    return (
        <>
            <h1>{title}</h1>
        </>
    )
}