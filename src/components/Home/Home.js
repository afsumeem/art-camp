import React from 'react';
import Header from '../Header/Header';

const Home = () => {
    return (
        <>
      <Header/>
        <div className='grid grid-cols-1 md:grid-cols-2'>
           <div className='bg-sky-500  h-40'>
            
           </div>

            <div className='bg-red-500 h-40'>
                
            </div> 
        </div>
        </>
    );
};

export default Home;