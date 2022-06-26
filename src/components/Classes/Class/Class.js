import React from 'react';

const Class = (props) => {
    const { name, description,teacherReview,classReview,learner } = props.classes;
    return (
        <div>
            <p>{description}</p>
            <h5>{name}</h5>
            <p>{teacherReview} total reviews for this teacher</p>
            <p>{classReview} reviews for this class</p>
            <h4>Completed by {learner} learners</h4>
        </div>
    );
};

export default Class;