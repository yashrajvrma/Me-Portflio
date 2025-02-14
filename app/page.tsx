"use client";
import Button from "./components/button";
import Navbar from "./components/navbar";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-full border-x-2 w-full">
      <div className="flex flex-col w-1/2 border-x-2 border-slate-200">
        <div className="flex justify-center items-center mt-16">
          <Navbar />
        </div>
        {/* Main section */}
        <div className="flex justify-center items-center  mt-36">
          <div className="main-section flex flex-col justify-start items=start max-w-xl gap-y-5">
            <div>
              <img
                className="w-28 h-28 rounded-full flex items-start"
                src="https://framerusercontent.com/images/ocqXLO2ydBuL2Vv9DNXMhcLr0dY.jpg"
                alt="profile-photo"
              />
            </div>
            <div className="font-switzer tracking-tighter text-neutral-900">
              <div className="text-5xl font-semibold py-2">
                Hey, I’m Yashraj.
              </div>
              <div className="text-5xl font-semibold ">
                Full Stack Developer
              </div>
              <div className="text-lg/6 text-neutral-500 pt-5 pb-4 tracking-normal">
                Crafting seamless experiences and bold visuals. High school
                student by day, creative thinker, and aspiring innovator by
                night.
              </div>
            </div>
            <div className="flex flex-row gap-4">
              <Button buttonName="Book a call" />
              <button className="bg-green-100 text-green-600 font-bold text-lg rounded-full px-6 py-2">
                {/* <span className="w-2 h-2 rounded-full bg-green-600">h</span> */}
                <div className="flex flex-row justify-center items-center align-middle gap-x-1">
                  <span>
                    <DotLottieReact
                      src="https://lottie.host/54562124-7a3c-47df-aec8-e060cdd9b7df/SwjpHiU6SD.lottie"
                      loop
                      autoplay
                      style={{
                        width: 20,
                        height: 20,
                        padding: 0,
                        margin: 0,
                      }}
                    />
                  </span>
                  Open to work
                </div>
              </button>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
