import React from "react";
import { technologies } from "../../constants";
import { SectionWrapper } from "../../hoc";
const Tech = () => {
  return (
    <div className="p-16">
      <div className="grid grid-cols-2 lg:grid-cols-4 sm:grid-cols-3 gap-8">
        {technologies.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-white rounded-3xl p-2 w-fit flex justify-center items-center animate-bounce duration-1000"
            >
              <img src={item.icon} alt={item.title} className="h-16 w-16 " />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
