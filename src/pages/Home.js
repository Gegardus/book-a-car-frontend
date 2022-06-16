import React from 'react';
import Sidebar from '../components/navigation/Sidebar';
import Hamburger from '../components/navigation/Hamburger';

const Home = () => (
  <div className="h-screen flex overflow-hidden bg-white">
    {/* Desktop */}
    <div className="hidden lg:flex lg:flex-shrink-0">
      <Sidebar />
    </div>
    <div className="flex flex-col min-w-0 flex-1 overflow-hidden mt-32 md:mt-1">
      {/* Mobile */}
      <Hamburger />
      Menu
    </div>
  </div>
);

export default Home;
