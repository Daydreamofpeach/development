import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { FiSettings } from 'react-icons/fi'

import { Navbar, Sidebar,  Map,  Heading, } from './components';
import { Kanban, Orders, Adventure, Calender, Motel, House, Hostel, Hotel, Food, Bar }
  from './pages';


import { useStateContext } from './context/ContextProvider';

import './App.css';
function App() {
  const { activeMenu } = useStateContext();

  return (
    <div>
    <BrowserRouter>
        <div
         className="flex relative"
        >
          <div
           className="fixed right-4 bottom-4"
           style={{ zIndex: '1000' }}
          > 
            <TooltipComponent
             content="Settings"
             position="Top"
            >
              <button
              type="button"
              className="text-3xl p-3 hover:bg-lime-900 text-white"
              style={{
              background: '',
              borderRadius: '50%'
                }}
              >
                <FiSettings />
              </button>
              
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div
              className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-zinc-900 h-full text-white text"
            >
              <Sidebar />
            </div>
          ) : (
              <div
                className="w-0 bg-secondary-dark-bg"
              >
                <Sidebar />
              </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-bg min-h-screen md:ml-72 w-full '
              : 'dark:bg-main-bg  min-h-screen w-full flex-2'
          }
          >
            <div
              className="sticky md:static bg-zinc-900 text-white dark:bg-main-dark-bg navbar w-full">
              <Navbar />
             
            
            </div >
            <Heading  />
            
          <div>
            <Routes>
              {/* darhboard */}
              <Route path="/" element={<Adventure />} />
            
              <Route path="/adventure" element={<Adventure />} />
              <Route path="/map" element={<Map />}  />
              {/* Pages */}
              <Route path="/orders" element={<Orders />}  />
              <Route path="/motel" element={<Motel />}  />
              <Route path="/hotel" element={<Hotel />}  />
              <Route path="/hostel" element={<Hostel />}  />
              <Route path="/house" element={<House />}  />
             {/*Kai*/}
              <Route path="/food" element={<Food />} />
              <Route path="/bar" element={<Bar />} />
              {/* Apps */}
              <Route path="/calender" element={<Calender />} />
              <Route path="/kanban" element={<Kanban />}  />
            </Routes>
          </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}



        

export default App;
