import React, { FC } from 'react';
import CardProps from './interfaces/cardinterface';

const Card: FC<CardProps> = (props): JSX.Element => {
    const imglink:string = props.imgurl;
  return (
    <div  className='m-3 flex flex-col rounded-md bg-white text-black w-80 cursor-pointer transition-transform transform duration-700 ease-in-out hover:scale-105'>
      <div className='w-full h-40'>
            <img src={imglink} alt="" className='object-cover w-full h-full rounded-t-md'/>
      </div>
      <div className='py-3 px-5 font-semibold flex flex-col' >
        {
            props.name
        }
        <div className='font-thin text-sm flex flex-wrap' >
            {
                props.desc
            }
        </div>
      </div>
    </div>
  );
};

export default Card;
