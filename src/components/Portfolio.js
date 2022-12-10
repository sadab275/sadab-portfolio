import React from 'react';
import rafsankitchen from '../assets/portfolio/rafsankitchen.PNG';
import resellingcars from '../assets/portfolio/resellingcars.PNG';
import skillassesment from '../assets/portfolio/skillassesment.PNG';
import music from '../assets/portfolio/music.PNG';
const Portfolio = () => {

    const projects = [
        {
            id: 1,
            src: rafsankitchen,
            live: "https://rafsan-kitchen.web.app/"
        },
        {
            id: 2,
            src: resellingcars
        },
        {
            id: 3,
            src: skillassesment
        },
        {
            id: 4,
            src: music
        },
    ]


    return (
        <div name="projects" className=' bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
                    <p className='py-6'>Check out some my projects right here</p>
                </div>



                <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-8 px-12 sm:px-0'>
                    {
                        projects.map(({ id, src, live }) => (
                            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                                <img className='rounded-md duration-200 hover:scale-105' src={src} alt="" />
                                <div className='flex items-center justify-center'>
                                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Live Site</button>
                                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    );
};

export default Portfolio;