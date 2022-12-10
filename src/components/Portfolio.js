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
            live: "https://rafsan-kitchen.web.app/",
            client: "https://github.com/sadab275/Rafsan-Kitchen-client-side",
            server: "https://github.com/sadab275/Rafsan-Kitchen-server-side"
        },
        {
            id: 2,
            src: resellingcars,
            live: "https://reselling-cars.web.app/",
            client: "https://github.com/sadab275/Reselling-Cars-client-side",
            server: "https://github.com/sadab275/Reselling-Cars-server-side"
        },
        {
            id: 3,
            src: skillassesment,
            live: "https://inquisitive-zuccutto-a95fba.netlify.app/",
            client: "https://github.com/sadab275/Quiz-Crackers",

        },
        {
            id: 4,
            src: music,
            live: "https://zingy-cactus-a2b1e5.netlify.app/",
            client: "https://github.com/sadab275/Ultra-Active-Club",

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
                        projects.map(({ id, src, live, client, server }) => (
                            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                                <img className='rounded-md duration-200 hover:scale-105' src={src} alt="" />
                                <div className='flex items-center justify-center'>
                                    <a href={live} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Live Site</a>
                                    <a href={client} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Client Side Code</a>
                                    <a href={server} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Server Side Code</a>
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