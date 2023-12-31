import React from "react";
import "/app/globals.css";
import Image from "next/image";
import { FiFilm, FiShoppingCart, FiSettings } from "react-icons/fi";
import { TbPlayVolleyball } from "react-icons/tb";
import { BsFillChatDotsFill, BsFillCarFrontFill } from "react-icons/bs";

const Component2 = ({ menu }) => {
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
      <div className="relative w-full h-full bg-black overflow-hidden flex justify-center items-center rounded-sm">
        <Image
          src="/assets/santorini.jpg"
          alt="Sydney"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="rounded-sm absolute inset-0 bg-opacity-10 bg-white backdrop-blur-sm flex flex-row gap-4 flex-wrap justify-center items-center m-12">
          {menu.map((item) => (
            <div
              key={item.id}
              className="rounded-sm w-64 h-48 bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg flex flex-col justify-center items-center cursor-pointer"
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

export default Component2;
