import React from 'react';
import "/app/globals.css"
import Image from 'next/image';


const Component1DB = [{
    id: 1,
    tileName: 'Movies',
    tileColor: 'bg-white'
},
{
    id: 2,
    tileName: 'Kids',
    tileColor: 'bg-green-200'
},
{
    id: 3,
    tileName: 'Shop',
    tileColor: 'bg-blue-200'
},
{
    id: 4,
    tileName: 'Connect',
    tileColor: 'bg-yellow-200'
},
{
    id: 5,
    tileName: 'Book Uber',
    tileColor: 'bg-pink-200'
},
{
    id: 6,
    tileName: 'other',
    tileColor: 'bg-green-200'
},
]

const Component1 = ({langCode,products,componentNumber}) => {
  return (
   <>
 
 <div className="relative w-[1000px] h-[500px] bg-black rounded-[4rem] overflow-hidden">
  <Image
    src="/assets/sydney_hd.jpg"
    alt="Sydney"
    layout="fill"
    objectFit="cover"
    quality={100}
  />
  <div className="absolute inset-0 bg-opacity-50 bg-white backdrop-blur-lg"></div>
     {Component1DB?.map((item, index) => {
        return (
            <div className="w-48 h-32 rounded-[2.5rem] bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg flex justify-center items-center cursor-pointer" key={item?.id}>
                 <h1 className='z-10 text-xl font-bold text-white'>{item?.tileName}</h1>
            </div>

        )})}
   
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
