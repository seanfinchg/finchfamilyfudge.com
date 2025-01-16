// src/pages/About.tsx
import React, { useEffect } from "react";

const About: React.FC = () => {
  useEffect(() => {
    document.title = "Finch Family Fudge | About";
  }, []);

  return (
    <div className="container mx-auto p-4 animate-fadeIn">
      <h2 className="text-3xl font-bold mb-4 text-lightText">About Me</h2>
      <p className="mb-4 text-lightText">
        Hello! I'm Sean Finch, the proud owner of Finch Family Fudge. Passionate
        about creating delicious, handcrafted fudge, I started this business to
        share my love for sweets with the community. Each batch is made with the
        finest ingredients and a lot of love to ensure every bite is a
        delightful experience.
      </p>
      <p className="mb-4 text-lightText">
        Whether you're craving classic chocolate, refreshing peppermint, or
        unique flavors like Rum Cherry, there's something for everyone. Thank
        you for supporting Finch Family Fudge – where every piece is a piece of
        happiness!
      </p>
    </div>
  );
};

export default About;
