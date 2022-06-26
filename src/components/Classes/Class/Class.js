import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Class = (props) => {
    const { name, description,image,teacherReview,classReview,learner } = props.classes;
   
    const star= <FontAwesomeIcon icon={faStar} />
    return (
        <div>
            <p className='pr-6 mb-10 text-black'>{description}</p>
            <div className='flex items-center'>
                <img src={image} className="h-12 w-12 rounded-full" alt=""/>
                <h5 className=' pl-3 text-violet-700 font-bold'>{name}</h5>
            </div>

            <div className='flex items-center pt-4'>
                <p className='text-yellow-400'>{star}{star}{star}{star}{star}</p>
                <p className='pl-3 text-xs text-gray-500'>{teacherReview} total reviews for this teacher</p>
            </div>

            <div className='flex items-center'>
                <p className='text-yellow-400'>{star}{star}{star}{star}{star}</p>
                <p className='pl-3 text-xs text-gray-500'>{classReview} reviews for this class</p>
            </div>
            
            <h4>Completed by {learner} learners</h4>
        </div>
    );
};

export default Class;