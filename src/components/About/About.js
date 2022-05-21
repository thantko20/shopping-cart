import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const About = () => {
  return (
    <div className='mx-auto max-w-[800px]'>
      <h2 className='mb-4 text-xl font-bold'>About</h2>
      <p>
        This is not a real store. I made this as a personal project. UI is still
        clunky. There will be improvements to be made in the future.
      </p>
      <br />
      <p>
        Vector Illustration by{' '}
        <a href='http://www.freepik.com' className='underline'>
          pikisuperstar / Freepik
        </a>
      </p>
      <br />
      <p>Made by "Me", Thant Ko Zaw</p>
      <p>
        You can view the repo of this project at{' '}
        <a
          href='https://github.com/thantko20/shopping-cart'
          className='ml-2 text-xl text-blue-600 hover:text-inherit'
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </p>
    </div>
  );
};

export default About;
