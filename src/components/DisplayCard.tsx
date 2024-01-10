import React from "react";
import { imageUrl } from "./icons/imageaddress";
import { bgimgurl } from "./icons/bgimageaddress";
const DisplayCard = () => {
  return (
    <div
      className="h-40"
      style={{
        backgroundImage: `url(${bgimgurl})`,
        backgroundSize: "cover",
      }}
    >
      <div className="h-full w-full flex flex-row align-center px-10 py-5 backdrop-blur-sm ">
        <div className="w-30 h-30 border-2 border-white rounded-full">
          <img
            className="object-cover w-full h-full rounded-full "
            src={imageUrl}
            alt="ProfilePic"
          />
        </div>
        <div className="flex flex-col justify-center px-5 text-3xl">
          Anish Gupta
          <span className="text-sm" >
            @anishgupta1510
          </span>
        </div>
      </div>
    </div>
  );
};

export default DisplayCard;
