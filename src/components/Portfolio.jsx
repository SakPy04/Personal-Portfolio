import React from 'react';
import cancer_detection from '../assets/portfolio/Cancer_detection.jpg';

import landscape from '../assets/portfolio/landscape_gan.png';

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: cancer_detection,
      href: "https://github.com/SakPy04/cancer-detection"
    },
    {
      id: 2,
      src: landscape,
      href: 'https://github.com/SakPy04/landscape_GAN'
    },
  ];

  return (
    <div name="Portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4'>Portfolio</p>
          <br></br>
          <p className='py-6'>Check out some of my work</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {portfolio.map(({ id, src, href }) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
              {/* Set a fixed height for the images */}
              <img src={src} alt={`Project ${id}`} className='h-40 w-full object-cover rounded-t-md duration-200 hover:scale-105'></img>
              <div className='flex items-center justify-center'>
                <a href={href} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' target="_blank" rel="noopener noreferrer">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio;
