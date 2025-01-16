// src/components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-darkBg p-4 text-center text-lightText w-full">
      <p>
        &copy; {new Date().getFullYear()} Finch Family Fudge. All rights
        reserved.
      </p>
      <p>
        Visit my other website:{" "}
        <a
          href="https://seanfinch.com"
          className="text-finchGold hover:text-yellow-400"
        >
          seanfinch.com
        </a>
      </p>
    </footer>
  );
};

export default Footer;
