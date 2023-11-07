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
 
 <div className="relative w-full h-full bg-black overflow-hidden flex ">
 
  <Image
    src="/assets/sydney_hd.jpg"
    alt="Sydney"
    layout="fill"
    objectFit="cover"
    quality={100}
  />
 <h3 className='text-white opacity-70 font-semibold text-2xl p-2'>My Spotlight</h3>
  <div className="absolute inset-0 bg-opacity-10 bg-white flex flex-row gap-4 flex-wrap justify-center items-center m-12 ">
    {Component1DB?.map((item, index) => {
      return (
        <div
          className="w-64 h-48 ] bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg flex flex-col justify-center items-center cursor-pointer"
          key={item?.id}
        >
         {item?.tileIcon}
          <h1 className="z-10 text-xl font-thin text-white">{item?.tileName}</h1>
        </div>
      );
    })}
  </div> 
</div>

      </>
  );
};

export default Component1;
