import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { BiMap } from 'react-icons/bi';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { useStateContext } from '../context/ContextProvider';

import { links } from '../data/dummy';

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false)
    }
  }

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';

  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-300 text-md dark:hover:text-black m-2';

  
  return (
    <div
      className="ml-3 h-screen md:overflow-hidden oveeflow-auto md:hover:overflow-auto pb-10"
    >
      {activeMenu && (
        <>
          <div
            className="flex justify-between items-center"
          >
            <Link
              to="/"
              onClick={handleCloseSideBar}
              className="items-center hover:text-gray-400"
            >
              <BiMap className="gap-4 mt-9 ml-24 flex text-2xl font-extrabold" />{" "}
              <span className="gap-7 mt-1 ml-16 flex text-xl font-extrabold"
              >
                {" "}
                Mātātoa{" "}
              </span>
            </Link>
            <TooltipComponent
              content="Menu" 
              position="BottomCenter"
            >
              <button
                type="button"
                onClick={() =>
                  setActiveMenu((prevActiveMenu) => !prevActiveMenu)
                }
                className="text-xl rounded-full p-3 hover:bg-gray-400 mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div
            className="mt-10">
            {links.map((item) => (
              <div
                key={item.title}>
                <p
                  className="text-white m-3 mt-4 underline hover:text-lime-700 pl-10"
                >
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon}
                    <span
                      className="capitalize"
                    >
                      {link.name}
                    </span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Sidebar
