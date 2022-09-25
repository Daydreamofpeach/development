import React, { useEffect,  } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsCalendar2DateFill } from 'react-icons/bs';


import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Calender } from '.'


import { useStateContext } from '../context/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title}
    position="BottomCenter">
    <button type="button" onClick={customFunc}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:text-white"
    >
      <span style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2 text-white hover:text-zinc-900"
      />
        {icon}
     
    </button>
  </TooltipComponent>
)

const Navbar = () => {
  const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize, } =
    useStateContext();
  //Justification these are required for the useEffect please leave 

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);
    
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
}, []);
  
  useEffect(() => {
    if(screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
// justification please leave this controls active Menu Function 
  return (
   
    <div
      className="flex justify-between p-2 md:mx-6 relative"
    >
      <NavButton
      title="Menu"
      customFunc={() =>
      setActiveMenu((prevActiveMenu) =>
      !prevActiveMenu)} color="white" icon={<AiOutlineMenu />}
      />
      
      <div
        className="flex"
      >
        <NavButton
          title="Calender"
          customFunc={() => handleClick('calender')}
          color="white"
          icon={<BsCalendar2DateFill />}
        />
        <TooltipComponent
          content="profile"
          position="BottomCenter"
        >
          <div
            className="flex  items-center gap-2 cursor-pointer p-1 hover:bg-zinc-900 rounded-1g"
            onClick={() => handleClick('userProfile')}>
           
            <p>
              <span
                className="text-gray-400 text-14"
              >Calender
              </span>
              <button className="text-gray-400 font-bold ml-1 text-xl"
              >Close
              </button>
            </p>
            <MdKeyboardArrowDown
              className="text-gray-400 text-14"
            />
          </div>
        </TooltipComponent>
        {isClicked.calender && <Calender />}
      </div>
    </div>
            
    
    );
  }
  
  export default Navbar
   


     