import React, { useState, useEffect } from 'react'


export default function Card(props) {
    const {title, date, hdurl, alt, explanation, copyright } = props.data
    //const [data, setData] = useState(null)
    
    //no side effect?
        //should I be mapping over instead?
    return (
         <div>
            
            <h2>{title}</h2>
            <p>{date}</p>
            <img className="img" src = {hdurl} alt = {alt}></img>
            <p>{explanation}</p>
            <p>{copyright}</p>
        </div>

    );
}

