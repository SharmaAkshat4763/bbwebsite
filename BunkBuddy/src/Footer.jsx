import React, { useEffect, useState } from 'react';


function Footer() {
  
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} BUNKBUDDY  .Inc</p>
      <a href='#'>Privacy Policy</a>
      <a href='#'>License</a>
      <a href='#'>Terms</a>

    </footer>
  );
}

export default Footer;
