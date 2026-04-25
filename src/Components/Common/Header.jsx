

import React, { useState } from 'react';
import Topbar from '../Navbar/Topbar';
import Navbar from '../Navbar/Navbar';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Topbar />
      <Navbar/>
    </>
  );
};

export default Header;