export default function WorkExperienceItem() {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">
        Work Experience
      </h2>
      <div>
        {/* First Experience */}
        <div className="relative flex gap-4 pb-8">
          {/* Timeline line */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                C
              </div>
            </div>
            <div className="w-0.5 bg-gray-200 h-full mt-2"></div>
          </div>

          {/* Content */}
          <div className="flex-1 pt-1">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold text-gray-900">
                  App Developer and Project Manager
                </h3>
                <p className="text-gray-600 text-sm">Commnete</p>
              </div>
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                AUG. 2022 - DEC. 2022
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              This was my first job at a startup. Commnete is a management,
              security and accounting solution for housing societies. I built
              their security app for guards, using React native and Expo. The
              security guards have to enter the visitor's information in a
              smooth simple yet easy to use form, along with other features such
              as emergency and parcel delivery.
            </p>
          </div>
        </div>

        {/* Second Experience */}
        <div className="relative flex gap-4 pb-8">
          {/* Timeline line */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                E
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 pt-1">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold text-gray-900">Co-Founder</h3>
                <p className="text-gray-600 text-sm">Epikhost</p>
              </div>
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                OCT 2021 - APR 2022
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              I was the Co-Owner of Epikhost, a hosting company. At our peak, we
              had more than 5000 members in our active discord community and
              more than 3000 users. I managed the community, managed finances
              and some of the technologies that enabled us to grow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
