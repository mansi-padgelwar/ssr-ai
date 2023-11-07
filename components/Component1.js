import React from 'react';
import "/app/globals.css"
import Image from 'next/image';
import {FiFilm,FiShoppingCart,FiSettings} from 'react-icons/fi';
import {TbPlayVolleyball} from 'react-icons/tb';
import {BsFillChatDotsFill,BsFillCarFrontFill} from 'react-icons/bs'



const Component1DB = [{
    id: 1,
    tileName: 'Movies',
    tileIcon:  <FiFilm size={32} color="white" />
},
{
    id: 2,
    tileName: 'Kids',
    tileIcon: <TbPlayVolleyball size={32} color="white"/>
},
{
    id: 3,
    tileName: 'Shop',
    tileIcon: <FiShoppingCart size={32} color="white"/>
},
{
    id: 4,
    tileName: 'Chat',
    tileIcon: <BsFillChatDotsFill size={32} color="white"/>
},
{
    id: 5,
    tileName: 'Book Uber',
    tileIcon: <BsFillCarFrontFill size={32} color="white"/>
},
{
    id: 6,
    tileName: 'Settings',
    tileIcon: <FiSettings size={32} color="white"/>
},
]

const Component1 = ({langCode,products,componentNumber}) => {
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
    {Component1DB?.map((item, index) => {
      return (
        <div
          className="w-64 h-48 rounded-[2.5rem] bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg flex flex-col justify-center items-center cursor-pointer"
          key={item?.id}
        >
         {item?.tileIcon}
          <h1 className="z-10 text-xl font-thin text-white">{item?.tileName}</h1>
        </div>
      );
    })}
  </div>
</div>



   {/* <div className="m-16 h-full w-[800px] bg-red-800 rounded-[4rem] flex flex-row justify-center items-center flex-wrap gap-4 border border-gray-100">
    <div className="m-16 h-full w-[800px] bg-red-100 bg-clip-padding backdrop-filter rounded-[4rem] flex flex-row justify-center items-center flex-wrap gap-4 backdrop-blur-sm bg-opacity-40 border border-gray-100">
          {Component1DB?.map((item, index) => {
              return (
                  <div className={`w-48 h-32 z-50 flex justify-center items-center bg-blur elevation-3 ${item?.tileColor} rounded-[2.5rem] bg-clip-padding backdrop-blur-sm bg-opacity-40 backdrop-filter`} key={item?.id}>
                      <h1 className='z-10 text-xl font-bold'>{item?.tileName}</h1>
                  </div>
              );
          })}
      </div> */}
      </>
  );
};

export default Component1;
