import React from 'react';
import Header from '../Header/Header';
import image1 from "../../images/12085871_dsc-4005.jpg"
import image2 from "../../images/download (1).jpg"
import image3 from "../../images/download (2).jpg"
import Classes from '../Classes/Classes/Classes';

const Home = () => {
    return (
        <div className="h-96 my-10 mx-10">
      <Header/>
        <div className='grid grid-cols-1 md:grid-cols-2 pt-10'>
           <div className=''>
            <Classes/>
            <div>
            <button>See Class Schedule </button>

            </div>
           </div>

            <div className=''>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div>
                      
                    <img className='h-40' src={image1} alt='' />
                           
                    </div>
                    <div>
                    <img className='h-20' src={image2}  alt=''/>
                    <img className='h-20'  src={image3} alt=''/>
                    </div>
                </div>
            </div> 
        </div>
        </div>
    );
};

export default Home;