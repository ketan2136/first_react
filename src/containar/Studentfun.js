import React from 'react';

const person = [
    {
        name: "amit",
        age: 19,
        course: {
            c1: "c",
            c2: "html"
        }
    },
    {
        name: "mayur",
        age: 20,
        course: {
            c1: "c",
            c2: "html"
        }
    }
];


let data = [{
    personal_info: {
        name: 'ketan',
        age: 25,
        city: 'surat'
    },
    courses : ["C", "JavaScript", "React"],
    branches : {
        b1: {
            admission: 50,
            vacant_seat: 10
        },
        b2: {
            admission: 30,
            vacant_seat: 20
        },
        b3: {
            admission: 25,
            vacant_seat: 25
        },
        b4: {
            admission: 40,
            vacant_seat : 10
        }
    }
}]



function Studentfun(props) {
    return (
        <div>
            <h1> i am student funtion basde componets.</h1>

            {
                person.map((v, i) => {
                    return (
                        <>
                            <h2><span>name :</span>{v.name}</h2>
                            <h2><span>age :</span>{v.age}</h2>
                            <h2><span>c1 :</span>{v.course.c1}</h2>
                            <h2><span>c2 :</span>{v.course.c2}</h2>
                        </>
                    );
                })
            }

            {
                data.map((v,i) => {
                    return (
                        <h2><span>name :</span>{v.personal_info.name}</h2>
                       
                    )
                })
            }
        </div>
    );
}

export default Studentfun;