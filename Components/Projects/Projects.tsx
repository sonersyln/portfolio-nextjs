import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]">
      <h1 className="heading">
        Pro <span className="text-yellow-400">Jeler</span>
      </h1>
      <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
        <div data-aos="fade-up">
        <a href="https://rentogo.com.tr/" target="_blank" rel="noopener noreferrer">

          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] rounded-xl overflow-hidden">
            <Image
              src="/images/project1.png"
              alt="portfolio"
              layout="fill"
              object-contain
            />
          </div>
          </a>
        </div>

        {/* delay eklerken 300-300 arttır */}
        <div data-aos="fade-up" data-aos-delay="300">
        <a href="https://github.com/sonersyln/rent2go_frontend" target="_blank" rel="noopener noreferrer">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] rounded-xl overflow-hidden">
            <Image
              src="/images/project2.png"
              alt="portfolio"
              layout="fill"
              object-contain
            />
          </div>
          </a>
        </div>

        <div data-aos="fade-up" data-aos-delay="600">
        <a href="https://github.com/sonersyln/google-nearby-search-backend" target="_blank" rel="noopener noreferrer">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] rounded-xl overflow-hidden">
            <Image
              src="/images/project3.png"
              alt="portfolio"
              layout="fill"
              object-contain
            />
          </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
