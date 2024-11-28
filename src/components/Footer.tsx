import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-finchGold p-4 text-center text-white">
      &copy; {new Date().getFullYear()} Finch Family Fudge. All rights reserved.
    </footer>
  );
};

export default Footer;
