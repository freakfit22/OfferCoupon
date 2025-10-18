import React, { useState } from "react";
import ScratchCard from "lesca-react-scratch-card";
import Coupon from "../src/assets/Coupon.jpeg";

const offers = [
  "💥 ₹899 for 1 month",
  "🔥 ₹799 for 1 month",
  "🎉 ₹699 for 1 month",
  "💫 ₹1399 for 2 months",
  "✨ ₹1199 for 2 months",
  "🎁 ₹1899 for 3 months",
  "🌟 ₹1699 for 3 months",
  "💸 20% OFF on any plan",
  "🚀 30% OFF on any plan",
];

const ScratchCardPage = () => {
  const [revealedOffer, setRevealedOffer] = useState(null);
  const [scratched, setScratched] = useState(false);

  const randomOffer = offers[Math.floor(Math.random() * offers.length)];

  // 🔴 Solid red SVG cover (base64)
  const redCover =
    "data:image/svg+xml;base64," +
    btoa(`<svg xmlns="http://www.w3.org/2000/svg" width="280" height="100">
            <rect width="100%" height="100%" fill="red"/>
          </svg>`);

  const settings = {
    width: 280,
    height: 100,
    cover: redCover,
    finishPercent: 60,
    onComplete: () => {
      setRevealedOffer(randomOffer);
      setScratched(true);
    },
  };

  return (
    <div
      className="w-screen h-screen flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #2B0A0A, #4B1D06, #E65100)",
      }}
    >
      {/* Coupon Card */}
      <div
        className="relative bg-cover bg-center rounded-3xl shadow-2xl overflow-hidden flex justify-center items-center border-4 border-yellow-500"
        style={{
          backgroundImage: `url(${Coupon})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "350px",
          height: "500px",
        }}
      >
        {/* Centered Scratch Area */}
        <div className="absolute inset-0 flex items-center justify-center"
          style={{
            top: "230px", // adjust vertical position
            left: "40px", // adjust horizontal position
          }}
        >
          {!scratched ? (
            <ScratchCard {...settings}>
              <div className="flex items-center justify-center w-[230px] h-[55px] bg-[#f8c200] rounded-lg shadow-inner">
                <p className="text-brown-800 font-semibold text-lg">
                  Scratch to reveal 🎁
                </p>
              </div>
            </ScratchCard>
          ) : (
            <div className="flex items-center justify-center w-[230px] h-[55px] bg-[#FCB712] rounded-lg shadow-md ml-[20px] mt-[30px]">
              <p className="text-2xl font-bold text-red-700 text-center">
                {revealedOffer}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScratchCardPage;
