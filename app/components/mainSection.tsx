import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Button from "./button";

export default function MainSection() {
  return (
    <div className="main-section flex flex-col justify-center items-start w-full max-w-xl gap-y-5">
      <div>
        <img
          className="w-28 h-28 rounded-full"
          src="assets/images/profilephoto.png"
          alt="profile-photo"
        />
      </div>
      <div className="font-switzer text-neutral-900">
        <div className="text-5xl font-semibold py-2 tracking-tight">
          Hey, I’m <span className="text-green-600">Yashraj Verma</span>.
        </div>
        <div className="text-5xl font-semibold tracking-tight ">
          <span className="text-pink-400">Full Stack</span> Developer
        </div>
        <div className="text-lg/6 text-neutral-500 pt-5 pb-4 tracking-normal">
          I build cool products that people love to use and that make their
          lives easier.
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <Button buttonName="Book a call" />
        <button className="bg-green-100 text-green-600 font-switzer font-semibold text-lg rounded-full px-6 py-2">
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
    </div>
  );
}
