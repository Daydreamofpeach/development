import React from 'react'

const Header = ({ category, title }) => {
  return (
    <div
      className="mb-5 pt-10 pl-10"
    >
      <p
        className="text-gray-300"
      >
        {category}
      </p>
      <p
        className="text-3xl font-extrabold">
        {title}
      </p>
    </div>
  );
}

export default Header