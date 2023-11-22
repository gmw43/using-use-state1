import React from "react";

export default function Display(props){
    return(
        <>
        <h1 className='text-2xl font-semibold border '>{props.heading}</h1>
        <p className='text-md bg-gray-200 py-2 px-2.5 '>{props.countDisplay}</p>
        </>
    )
}


