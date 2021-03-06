import React from 'react';
import Header from '../Header/Header';
import image1 from "../../images/image4.jpg"
import image2 from "../../images/image (1).jpg"
import image3 from "../../images/image (2).jpg"
import Classes from '../Classes/Classes/Classes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShareSquare } from '@fortawesome/free-regular-svg-icons';
import { faChevronRight} from '@fortawesome/free-solid-svg-icons';
import "./Home.css";

const Home = () => {
    
    // font awesome icon
    const heart = <FontAwesomeIcon icon={faHeart} />
    const share = <FontAwesomeIcon icon={faShareSquare} />
    const arrow =<FontAwesomeIcon icon={faChevronRight}/>

    return (
        <div className="my-10 mx-10">
            {/* header */}
            <Header/>

            {/* main content */}

        <div className='grid grid-cols-1 md:grid-cols-2 pt-10'>
            {/* all classes */}

           <div>
            <Classes/>
            {/* button */}

            <div className='items-center justify-between flex mb-2'>
                <button type='button' className='bg-violet-700 text-slate-100 px-5 mt-6 py-2 rounded-full cursor-pointer hover:bg-violet-900'>See Class Schedule {arrow}</button>

                <p className='pt-6 text-violet-700 cursor-pointer hover:text-violet-900'>{heart} Save</p>
                <p className='pt-6 text-violet-700 pr-14 cursor-pointer hover:text-violet-900'>{share} Share</p>
            </div>
           </div>

                {/* all images */}
                <div className='grid grid-cols-1 md:grid-cols-2' >
                    <div className='image mb-6'>
                        <img className='h-96' src={image1} alt='' /> 
                    </div>

                    <div>
                        <div className='image'>
                    <img className='h-48' src={image2}  alt=''/>
                    </div>
                        <div className='image'>
                        <img className='h-48 pt-6'  src={image3} alt=''/>
                        </div>
                    </div>
                </div>
        </div>
        </div>
    );
};

export default Home;