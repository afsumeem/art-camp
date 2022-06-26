import React, { useEffect, useState } from 'react';
import Class from '../Class/Class';

const Classes = () => {
    const [allClasses, setAllClasses] = useState([]);

    // fetch data
    useEffect(() => {
        fetch('./fakedata.json')
            .then(res => res.json())
            .then(data => setAllClasses(data));
    }, [])
    return (
        <div>
            {
                allClasses.map(classes => <Class
                    key={classes._id}
                    classes={classes}
                >
                </Class>)
            }
        </div>
    );
};

export default Classes;