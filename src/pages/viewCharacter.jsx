import React from 'react';

export default function (props) {
    console.log(props);

    const API_ENDPOINT = props.url;
    

    return (
        <div>
        <h1>{props.name}</h1>
            <p>Character info goes here</p>
        </div>
    );
}