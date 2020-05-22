import React from 'react';

export default function Test(props) {
return <h1>Hello {props.fname} {props.lname}</h1>;
}

export function getServerProps() {
    return new Promise((resolve) => {
        resolve({
            fname: 'rakesh',
            lname: 'rawat'
        });
    });
}