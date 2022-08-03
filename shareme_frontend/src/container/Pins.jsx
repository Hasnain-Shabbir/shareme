import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  Navbar,
  Feed,
  PinDetail,
  CreatePin,
  Search,
} from '../components/components';

const Pins = ({ user }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className='px-2 md:px-5'>
      <div className='bg-gray-50'>
        <Navbar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          user={user}
        />
      </div>
      <div className='h-full'>
        <Routes>
          <Route to='/' element={<Feed />} />
          <Route to='/category/:categoryId' element={<Feed />} />
          <Route to='/pin-detail/:pinId' element={<PinDetail user={user} />} />
          <Route to='/create-pin' element={<CreatePin user={user} />} />
          <Route
            to='/search'
            element={
              <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default Pins;
