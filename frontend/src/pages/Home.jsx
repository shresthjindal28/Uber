import React, { useRef, useState } from "react";
import {useGSAP} from '@gsap/react'
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from "../components/LocationSearchPanel";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [pannel, setPannel] = useState(false)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(function () {
    if (pannel) {
        gsap.to(panelRef.current, {
            height: '70%',
            padding: 24
            // opacity:1
        })
        gsap.to(panelCloseRef.current, {
            opacity: 1
        })
    } else {
        gsap.to(panelRef.current, {
            height: '0%',
            padding: 0
            // opacity:0
        })
        gsap.to(panelCloseRef.current, {
            opacity: 0
        })
    }
}, [ pannel ])



  return (
    <div className="h-screen relative">
      <img
        className="w-24 mt-5 absolute ml-8"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />

      <div className="h-screen w-screen">
        <img
          className="h-full w-full object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABLUH3RR9WY4ogN9jIsbV0QTaQWXDvEWW1A&s"
          alt=""
        />
      </div>

      <div className="absolute h-screen top-0 w-full flex flex-col justify-end">
        <div className="h-[30%] p-5 bg-white relative">
          <h5 ref={panelCloseRef} onClick={()=>{
            setPannel(false)
          }} className="absolute right-6 top-6 text-2xl">
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>

          <form
            className="gap-4 mt-3"
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <input
              onClick={() => {setPannel(true)}}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              className="bg-[#eee] px-8 py-2 text-base rounded-lg mt-7 w-full"
              type="text"
              placeholder="Enter your location"
            />
            <input
              onClick={() => {setPannel(true)}}
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              className="bg-[#eee] px-8 py-2 text-base rounded-lg mt-7 w-full"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>

        <div ref={panelRef} className="h-0 bg-white ">
              <LocationSearchPanel/>
        </div>
      </div>

      <div className="fixed z-10">
        <div className="">
          {/* sample vehicle data */}
        </div>
      </div>
    </div>
  );
};

export default Home;
