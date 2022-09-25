import React from 'react'
import { MotelGrid } from '../components';
import { Header } from '../components';
const Motel = () => {
  return (
    <div
      className="m-5"
    >
      <Header
        className="text text-6xl"
        title="min 3 nights, max 10 nights"
        category="Motels"
      />
      <MotelGrid />
    </div>
  );
}

export default Motel