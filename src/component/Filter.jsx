import React, { useState } from "react";

const Filter = () => {
  const [sliderValue, setSliderValue] = useState(50);
  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };
  return (
    <div className="w-full border  border-bcolor rounded-[5px]  p-5 bg-white ">
      <div className="text-sm font-semibold text-blacktext">Filter</div>
      <div>
        {/* location */}
        <div className="text-[12px] font-semibold mt-5 text-blacktext">
          Location
        </div>

        <select className=" w-full  border  px-2 mt-2 border-textInputborderColor rounded-[5px]  h-[40px] focus:outline-none focus:border-gray-400 focus:ring-0">
          <option className="text-[14px]" value="">
            Jos
          </option>
          <option className="text-[14px]" value="">
            Abuja
          </option>
          <option className="text-[14px]" value="">
            Lagos
          </option>
          <option className="text-[14px]" value="">
            Ibadan
          </option>
        </select>
      </div>

      <div>
        {/* country */}
        <div className="text-[12px] font-semibold mt-5 text-blacktext">
          Country
        </div>

        <select className=" w-full  border  px-2 mt-2 border-textInputborderColor rounded-[5px]  h-[40px] focus:outline-none focus:border-gray-400 focus:ring-0">
          <option className="text-[14px]" value="">
            Nigeria
          </option>
          <option className="text-[14px]" value="">
            Ghana
          </option>
        </select>
      </div>

      <div>
        {/* location */}
        <div className="text-[12px] font-semibold mt-5 text-blacktext">
          Availability
        </div>
        <div className=" flex items-center text-center flex-rows justify-items-center mt-2">
          <input type="checkbox" className="w-5 h-5 mt-2 text-[14px]"></input>
          <div className="ml-4 mt-1 text-[14px] text-gray text-graytext">
            Freelancer / Contract
          </div>
        </div>

        <div className=" flex items-center text-center flex-rows justify-items-center mt-2">
          <input type="checkbox" className="w-5 h-5 mt-2 text-[14px]"></input>
          <div className="ml-4 mt-1 text-[14px] text-gray text-graytext">
            Full Time
          </div>
        </div>
      </div>

      <div>
        {/* salary */}
        <div className="text-[12px] font-semibold mt-5 text-blacktext">
          Salary
        </div>

        <div className=" flex items-center text-center gap-4 flex-rows justify-items-center mt-2">
          <input
            type="range"
            min="0"
            max="3500"
            value={sliderValue}
            onChange={handleSliderChange}
            className="w-[70%]"
          />
          <p className="text-graytext">$ {sliderValue}</p>
        </div>
      </div>

      <div>
        {/* location */}
        <div className="text-[12px] font-semibold mt-5 text-blacktext">
          Specialties
        </div>
        <div className=" flex items-center text-center flex-rows justify-items-center mt-2">
          <input type="checkbox" className="w-5 h-5 mt-2 text-[14px]"></input>
          <div className="ml-4 mt-1 text-[14px] text-gray text-graytext">
            Front-end dev
          </div>
        </div>

        <div className=" flex items-center text-center flex-rows justify-items-center mt-2">
          <input type="checkbox" className="w-5 h-5 mt-2 text-[14px]"></input>
          <div className="ml-4 mt-1 text-[14px] text-gray text-graytext">
            Back-end dev
          </div>
        </div>
        <div className=" flex items-center text-center flex-rows justify-items-center mt-2">
          <input type="checkbox" className="w-5 h-5 mt-2 text-[14px]"></input>
          <div className="ml-4 mt-1 text-[14px] text-gray text-graytext">
            Driver
          </div>
        </div>

        <div className=" flex items-center text-center flex-rows justify-items-center mt-2">
          <input type="checkbox" className="w-5 h-5 mt-2 text-[14px]"></input>
          <div className="ml-4 mt-1 text-[14px] text-gray text-graytext">
            Cook
          </div>
        </div>

        <div className=" flex items-center text-center flex-rows justify-items-center mt-2">
          <input type="checkbox" className="w-5 h-5 mt-2 text-[14px]"></input>
          <div className="ml-4 mt-1 text-[14px] text-gray text-graytext">
            House keeper
          </div>
        </div>

        <div className=" flex items-center text-center flex-rows justify-items-center mt-2">
          <input type="checkbox" className="w-5 h-5 mt-2 text-[14px]"></input>
          <div className="ml-4 mt-1 text-[14px] text-gray text-graytext">
            Gardner
          </div>
        </div>

        <div className=" flex items-center text-center flex-rows justify-items-center mt-2">
          <input type="checkbox" className="w-5 h-5 mt-2 text-[14px]"></input>
          <div className="ml-4 mt-1 text-[14px] text-gray text-graytext">
            Electriain{" "}
          </div>
        </div>

        <div className=" flex items-center text-center flex-rows justify-items-center mt-2">
          <input type="checkbox" className="w-5 h-5 mt-2 text-[14px]"></input>
          <div className="ml-4 mt-1 text-[14px] text-gray text-graytext">
            Others
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
