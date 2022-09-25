import React from 'react';
import { HostelGrid } from '../components';
import { Header } from '../components';
const Hostel = () => {
  return (
    <div
      className="m-5"
    >
      <Header
        className="text-6xl" 
        title="min 1 night, max 10" 
        category="Hostels"
      />
      <HostelGrid />
    </div>
  );
}

export default Hostel