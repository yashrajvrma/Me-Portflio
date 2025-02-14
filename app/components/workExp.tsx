interface WorkExperience {
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string;
  imgSrc: string;
}

const experiences: WorkExperience[] = [
  {
    startDate: "FEB. 2025",
    endDate: "PRESENT",
    title: "Full-Stack Developer",
    company: "TechLuminix",
    description:
      "I built a lot of example apps and client projects for mem0. I was also contributing to educating users, maintaining documentation and creating tutorials. At mem0, I learnt a lot about small startups since I was their only developer. This was also my first time working with AI and LLMs, especially Vector databases and Memory.",
    imgSrc: "assets/images/1720175360812.jpg",
  },
  {
    startDate: "NOV. 2024",
    endDate: "JAN. 2025",
    title: "React Developer",
    company: "TechLuminix",
    description:
      "This was my first job at a startup. Commnete is a management, security and accounting solution for housing societies. I built their security app for guards, using React native and Expo. The security guards have to enter the visitor's information in a smooth simple yet easy to use form, along with other features such as emergency and parcel delivery.",
    imgSrc: "assets/images/1720175360812.jpg",
  },
];

export default function WorkExperience() {
  return (
    // <div className="max-w-xl font-switzer">
    //   <div className="font-semibold text-neutral-900 text-2xl">
    //     Work Experience
    //   </div>
    //   <div className="space-y-8 relative">
    //     {/* Vertical connecting line */}
    //     <div className="absolute left-10 top-0 bottom-0 w-[2px] bg-gray-200 transform -translate-x-1/2" />

    //     {experiences.map((experience, index) => (
    //       <div key={index} className="flex gap-4 relative">
    //         {/* Logo circle with white background to mask the line */}
    //         <div
    //           className={`w-20 h-20 rounded-full flex items-center justify-center shrink-0 relative z-10`}
    //         >
    //           <img src={`${experience.imgSrc}`} alt="company-logo" />
    //           {/* <div className="w-6 h-6 bg-gray-700 rounded-sm" /> */}
    //         </div>
    //         <div className="space-y-2">
    //           <div className="text-sm text-gray-500 font-medium">
    //             {experience.startDate} - {experience.endDate}
    //           </div>
    //           <h3 className="text-xl font-semibold text-gray-900">
    //             {experience.title}
    //           </h3>
    //           <div className="text-base font-medium text-gray-700">
    //             {experience.company}
    //           </div>
    //           <p className="text-gray-600 leading-relaxed">
    //             {experience.description}
    //           </p>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    //   <br />
    //   <br />
    //   <br />
    //   <br />
    //   <br />
    //   <br />
    //   <br />
    //   <br />
    //   <br />
    //   <br />
    //   <br />
    //   <br />
    //   <br />
    // </div>
    <div className="max-w-xl font-switzer">
      <div className="font-semibold text-neutral-900 text-2xl">
        Work Experience
      </div>
      <div className="space-y-8 relative">
        {/* Vertical Line: Starts from first image and ends at the second image */}
        {experiences.length > 1 && (
          <div className="absolute left-10 top-[0rem] bottom-[11rem] w-[2px] bg-gray-300 -translate-x-1/2" />
        )}

        {experiences.map((experience, index) => (
          <div key={index} className="flex gap-4 relative">
            {/* Logo Circle */}
            <div className="w-20 h-20 rounded-full flex items-center justify-center shrink-0 relative z-10 bg-white">
              <img
                src={experience.imgSrc}
                alt="company-logo"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Experience Details */}
            <div className="space-y-2 font-normal">
              <div className="text-sm text-gray-500">
                {experience.startDate} - {experience.endDate}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {experience.title}
              </h3>
              <div className="text-base font-medium text-gray-700">
                {experience.company}
              </div>
              <p className="text-gray-600 leading-relaxed">
                {experience.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
