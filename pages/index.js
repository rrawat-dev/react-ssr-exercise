import React, {useState} from 'react';

export default function Home() {
    const [count, setCount] = useState(5);
    return (
        <h1 onClick={() => setCount(count + 1)}>{count}</h1>
    );
}