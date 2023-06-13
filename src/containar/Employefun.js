import React, { useState } from 'react';

function   Employefun(props) {

    const [name, setName] = useState('amit')
    const [age, setAge] = useState(20)

    const handleage = () => {
        setAge (50);
    } 

    return (
        <div>
            <h1>hellow employee function</h1>
            <p>name : {name}</p>
            <p>age : {age}</p>
            <button onClick={handleage}>chenge age</button>
        </div>
    );
}

export default Employefun;