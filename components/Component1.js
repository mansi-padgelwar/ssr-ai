import React from "react";
import "/app/globals.css";
import Image from "next/image";
import { FiFilm, FiShoppingCart, FiSettings } from "react-icons/fi";
import { TbPlayVolleyball } from "react-icons/Tb";
import { BsFillChatDotsFill, BsFillCarFrontFill } from "react-icons/Bs";

const Component1 = ({ menu }) => {
  const iconComponents = {
    FiFilm,
    TbPlayVolleyball,
    FiShoppingCart,
    BsFillChatDotsFill,
    BsFillCarFrontFill,
    FiSettings,
  };
  return (
    <>
      <div className="relative w-full h-full bg-black rounded-[4rem] overflow-hidden flex justify-center items-center">
        <Image
          src="/assets/sydney_hd.jpg"
          alt="Sydney"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-opacity-10 bg-white backdrop-blur-sm flex flex-row gap-4 flex-wrap justify-center items-center m-12 rounded-[3rem]">
          {menu.map((item) => (
            <div
              key={item.id}
              className="w-64 h-48 rounded-[2.5rem] bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg flex flex-col justify-center items-center cursor-pointer"
            >
              {React.createElement(
                iconComponents[item.tileIcon.type],
                item.tileIcon.props
              )}
              <h1 className="z-10 text-xl font-thin text-white">
                {item.tileName}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Component1;
