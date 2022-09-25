import React from 'react'
import { HouseGrid } from '../components';
import { Header } from '../components';

const House = () => {
  return (
    <div className="m-5">
      <Header
        className="text-6xl"
        category="Houses"
        title="min 2 nights, max 15 nights"
      />
      <HouseGrid />
    </div>
  );
}

export default House