import React from 'react';
import { urlFor } from '../client';

const Pin = ({ pin: { postedBy, image, _id, destination } }) => {
  return (
    <div className=''>
      <img
        src={urlFor(image).width(250).url()}
        alt='user-post'
        className='rounded-lg w-full'
      />
    </div>
  );
};

export default Pin;
