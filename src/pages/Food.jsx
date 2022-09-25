import React from 'react'
import { FoodGrid } from '../components';
import { Header } from '../components';
const Food = () => {
  return (
    <div
      className="m-5"
    >
      <Header
        className="text-6xl" 
        title="Hoko Kai" 
        category="Food Menu"
      />
      <FoodGrid />
    </div>
  );
}

export default Food