import React from 'react';
import { BarGrid } from '../components';
import { Header } from '../components';
const Bar = () => {

  return (
    
    <div
      className="m-5"
    >
      <Header
        className="text-6xl"
        title="Beverages"
      />
      <BarGrid />
    </div>
  )
}

export default Bar