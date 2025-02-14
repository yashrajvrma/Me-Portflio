"use client";

import { Minus, Github } from "lucide-react";
import Button from "./button";
import Link from "next/link";

export default function Navbar() {
  return (
    // <div className="flex justify-center items-center mt-10">
    <div className="fixed flex flex-row gap-y-3 justify-center items-center align-middle max-w-lg bg-white/40 backdrop-blur-lg border-neutral-200 border-2 py-2 px-3 rounded-3xl">
      <Link href="">
        <div className="hover:bg-neutral-200 hover:cursor-pointer py-3 px-4 rounded-2xl">
          <img
            className="w-5"
            src="assets/images/svg-image-14.svg"
            alt="home.svg"
          />
        </div>
      </Link>

      <div className="rotate-90">
        <Minus strokeWidth={0.5} size={44} color="#c7c7c7" />
      </div>
      <Link href="https://x.com/yashrajvrma" target="blank">
        <div className="hover:bg-neutral-200 hover:cursor-pointer py-3 px-4 rounded-2xl">
          {" "}
          <img
            className="w-5"
            src="assets/images/svg-image-10.svg"
            alt="twitter svg"
          />
        </div>
      </Link>

      <Link href="https://github.com/yashrajvrma/" target="blank">
        <div className="hover:bg-neutral-200 hover:cursor-pointer py-3 px-4 rounded-2xl">
          <Github strokeWidth={1.5} size={19} />
        </div>
      </Link>

      <div className="hover:bg-neutral-200 hover:cursor-pointer py-3 px-4 rounded-2xl">
        <img
          className="w-5"
          src="assets/images/svg-image-15.svg"
          alt="twitter svg"
        />
      </div>
      <div className="rotate-90">
        <Minus strokeWidth={0.5} size={44} color="#c7c7c7" />
      </div>
      <div>
        <Button buttonName="Book a call" />
      </div>
    </div>

    // </div>
  );
}
