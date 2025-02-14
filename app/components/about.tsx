import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col justify-start items-start max-w-xl gap-y-2 font-switzer border-b-2 border-neutral-30">
      <div className="text-neutral-900 text-2xl font-semibold pb-3">About</div>
      <div className="text-neutral-600 tracking-none leading-7 text-lg mb-24 text-pretty">
        I'm Yashraj, a 3rd year undergrad{" "}
        <span className="font-sans font-semibold">@</span>
        <Link
          className="text-blue-600  hover:border-b-2 border-blue-400"
          href="https://www.tcetmumbai.in/"
          target="blank"
        >
          TCET{" "}
        </Link>
        pursuing Engineering. I love to build cool products that makes peoples
        lives easier. I play, read books and create content for fun.
        <br /> Currently working as a full-stack devleloper
        <span className="font-sans font-semibold"> @</span>
        <Link
          className="text-blue-600 hover:border-b-2 border-blue-400"
          href="https://www.tcetmumbai.in/"
          target="blank"
        >
          TechLuminix
        </Link>
        .
      </div>
    </div>
  );
}
