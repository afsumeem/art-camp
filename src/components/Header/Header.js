import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion} from '@fortawesome/free-regular-svg-icons'

const Header = () => {
    const questionMark = <FontAwesomeIcon icon={faCircleQuestion} />
    return (
        
        // main header
        <div>
            <h2 className='font-extrabold text-3xl'>Summer Art Camp! 5 Days of Artists and Painting Monet, <br/>Van Gogh, Matisse, & More</h2>

            <p className='pt-2 text-base font-semibold text-gray-500'>Multi-Day Course {questionMark}</p>
        </div>
    );
};

export default Header;