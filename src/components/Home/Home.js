import React, { useEffect, useState } from 'react';
import VectorImg from '../../assets/vector-illustration.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  return (
    <div
      className={`flex-grow flex flex-col items-center lg:flex-row justify-around pb-2 px-6 transition-opacity duration-1000 ${
        !isAnimated ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className='max-w-[40ch]'>
        <p className='text-4xl font-bold'>Your One Stop Mart For Everything</p>
        <p className='text-base text-gray-600 mb-6'>
          <span className='font-medium font-lobster text-black underline'>
            goodies
          </span>{' '}
          offers you the best products with the reasonable prices. Our goal is
          to provide people to go shopping online with ease. Click the link
          below to get going with shopping!
        </p>

        <Link
          to='/shop'
          className='text-xs font-semibold bg-blue-500 p-2 rounded text-white border-2 border-blue-500 transition-colors hover:bg-transparent hover:text-black'
        >
          Shop Now
        </Link>
      </div>
      <img
        src={VectorImg}
        alt='vector illustration of shopping'
        width={750}
        height={750}
      />
    </div>
  );
};

export default Home;
