import React, { useRef, useState } from "react";
import {useGSAP} from '@gsap/react'
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanle from "../components/VehiclePanle";
import ConfirmedVehicle from "../components/ConfirmedVehicle";
import LookingForDriver from "../components/LookingForDriver";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [pannel, setPannel] = useState(false)
  const vehiclePanleRef = useRef(null)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false)
  const confirmRidepanle = useRef(null)
  const [confirmRide, setConfirmRide] = useState(false)
  const vehicleFoundRef = useRef(null)
  const [ vehicleFound, setVehicleFound ] = useState(false)


  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(function () {
    if (pannel) {
        gsap.to(panelRef.current, {
            height: '70%',
            display:'block',
            padding: 24
            // opacity:1
        })
        gsap.to(panelCloseRef.current, {
            opacity: 1
        })
    } else {
        gsap.to(panelRef.current, {
            height: '0%',
            display:'none',
            padding: 0
            // opacity:0
        })
        gsap.to(panelCloseRef.current, {
            opacity: 0
        })
    }
  }, [ pannel ])

  useGSAP(function () {
    if (vehiclePanelOpen) {
      gsap.to(vehiclePanleRef.current, {
        transform:'translateY(0)'
      })
    } else {
      gsap.to(vehiclePanleRef.current, {
        transform:'translateY(100%)'
      })
    }
  },[vehiclePanelOpen])

  useGSAP(function () {
    if (confirmRide) {
      gsap.to(confirmRidepanle.current, {
        transform:'translateY(0)'
      })
    } else {
      gsap.to(confirmRidepanle.current, {
        transform:'translateY(100%)'
      })
    }
  },[confirmRide])

  useGSAP(function () {
    if (vehicleFound) {
        gsap.to(vehicleFoundRef.current, {
            transform: 'translateY(0)'
        })
    } else {
        gsap.to(vehicleFoundRef.current, {
            transform: 'translateY(100%)'
        })
    }
}, [ vehicleFound ])

  return (
    <div className="h-screen relative ">
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

        <div ref={panelRef} className=" hidden bg-white ">
              <LocationSearchPanel setPannel={setPannel} setVehiclePanelOpen={setVehiclePanelOpen} />
        </div>
      </div>

      <div className="">
        <div ref={vehiclePanleRef} className="fixed z-10 w-full bottom-0 translate-y-full bg-white px-3 py-8">
          <VehiclePanle setConfirmRide={setConfirmRide} setVehiclePanelOpen={setVehiclePanelOpen}/>
        </div>
      </div>

      <div ref={confirmRidepanle} className="fixed z-10 w-full bottom-0 translate-y-full bg-white px-3 py-8">
            <ConfirmedVehicle setConfirmRide={setConfirmRide} setVehicleFound={setVehicleFound}   />
      </div>

      <div ref={vehicleFoundRef} className="fixed z-10 w-full bottom-0 translate-y-full bg-white px-3 py-8">
            <LookingForDriver setVehicleFound={setVehicleFound} />
      </div>

    </div>
  );
};

export default Home;
