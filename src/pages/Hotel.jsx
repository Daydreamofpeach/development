import React from 'react';
import { HotelGrid } from '../components';
import { Header } from '../components';
const Hotel = () => {
  return (
    <div
      className="m-5"
    >
      <Header
        className="text-6xl"
      />
      <HotelGrid />
    </div>
  );
}

export default Hotel