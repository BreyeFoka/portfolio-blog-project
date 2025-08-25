import React, { useState, useEffect } from 'react';
import { MdTravelExplore, MdLocationOn, MdFlag } from 'react-icons/md';
import ReactCountryFlag from "react-country-flag";

interface Country {
  name: string;
  code: string; // ISO country code (instead of emoji)
  year: string;
  experience: string;
}

interface VisitedCountries {
  europe: Country[];
  africa: Country[];
}

const TravelMap = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const visitedCountries: VisitedCountries = {
    europe: [
      { name: 'France', code: 'FR', year: '2022', experience: 'Explored Paris and the French Riviera' },
      { name: 'Belgium', code: 'BE', year: '2021', experience: 'Discovered Brussels and medieval Bruges' },
      { name: 'Germany', code: 'DE', year: '2023', experience: 'Berlin history and Bavarian culture' },
      { name: 'Switzerland', code: 'CH', year: '2022', experience: 'Alpine adventures in the Swiss Alps' },
      { name: 'Turkey', code: 'TR', year: '2020', experience: 'Istanbul\'s rich cultural heritage' },
    ],
    africa: [
      { name: 'Chad', code: 'TD', year: '2019', experience: 'Saharan landscapes and local communities' },
      { name: 'Sudan', code: 'SD', year: '2020', experience: 'Ancient Nubian archaeology' },
      { name: 'Cameroon', code: 'CM', year: '2021', experience: 'Diverse ecosystems and cultures' },
      { name: 'Nigeria', code: 'NG', year: '2018', experience: 'Lagos\' vibrant energy and Nollywood' },
      { name: 'Benin', code: 'BJ', year: '2019', experience: 'Vodou traditions and colonial history' },
      { name: 'Togo', code: 'TG', year: '2019', experience: 'Coastal beauty and traditional markets' },
      { name: 'Ghana', code: 'GH', year: '2020', experience: 'Gold Coast heritage and Ashanti culture' },
      { name: 'Ethiopia', code: 'ET', year: '2021', experience: 'Ancient churches of Lalibela' },
      { name: 'Kenya', code: 'KE', year: '2022', experience: 'Safari adventures in the Maasai Mara' },
      { name: 'Rwanda', code: 'RW', year: '2023', experience: 'Mountain gorillas and resilient communities' },
      { name: 'Niger', code: 'NE', year: '2018', experience: 'Sahel region and traditional crafts' },
    ]
  };

  const renderFlag = (code: string, size: string = "1.5em") => (
    <ReactCountryFlag
      countryCode={code}
      svg
      style={{
        width: size,
        height: "auto",
      }}
      className="rounded-sm shadow-sm animate-wave"
    />
  );

  return (
    <div className="mb-12 sm:mb-16">
      <div className="bg-white/20 dark:bg-zinc-800/20 backdrop-blur-sm border border-white/10 dark:border-zinc-700/10 rounded-2xl p-6 sm:p-8 shadow-xl">
        
        {/* Header */}
        <div className="flex items-center mb-6">
          <MdTravelExplore className="text-teal-500 text-2xl mr-3" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">My Travels</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              I'm passionate about exploring different cultures and places...
            </p>

            {/* Country Lists */}
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                  <MdFlag className="mr-2 text-blue-500" />
                  Europe ({visitedCountries.europe.length} countries)
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {visitedCountries.europe.map((country) => (
                    <button
                      key={country.name}
                      onClick={() => setSelectedCountry(country)}
                      className={`text-left p-2 rounded-lg transition-all duration-200 ${
                        selectedCountry?.name === country.name 
                          ? 'bg-blue-500/20 border border-blue-500/30' 
                          : 'hover:bg-white/10 dark:hover:bg-zinc-700/30'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        {renderFlag(country.code)}
                        <span className="text-sm font-medium text-gray-900 dark:text-white">{country.name}</span>
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">{country.year}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                  <MdFlag className="mr-2 text-orange-500" />
                  Africa ({visitedCountries.africa.length} countries)
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {visitedCountries.africa.map((country) => (
                    <button
                      key={country.name}
                      onClick={() => setSelectedCountry(country)}
                      className={`text-left p-2 rounded-lg transition-all duration-200 ${
                        selectedCountry?.name === country.name 
                          ? 'bg-orange-500/20 border border-orange-500/30' 
                          : 'hover:bg-white/10 dark:hover:bg-zinc-700/30'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        {renderFlag(country.code)}
                        <span className="text-sm font-medium text-gray-900 dark:text-white">{country.name}</span>
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">{country.year}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center space-x-8 mb-8">
  <div className="flex flex-col items-center">
    <div className="h-16 w-1 bg-gray-400 dark:bg-gray-600 rounded-full" />
    {renderFlag("CM", "3em")} {/* Example: Home = Cameroon */}
    <span className="mt-2 text-sm font-medium">Home</span>
  </div>
  <div className="flex flex-col items-center">
    <div className="h-16 w-1 bg-gray-400 dark:bg-gray-600 rounded-full" />
    {renderFlag("RW", "3em")} {/* Example: Current = Rwanda */}
    <span className="mt-2 text-sm font-medium">Current</span>
  </div>
</div>

{/* Travel Timeline */}
<div className="relative border-l border-gray-300 dark:border-gray-600 pl-6 ml-2 mt-8 space-y-6">
  {[...visitedCountries.africa, ...visitedCountries.europe]
    .sort((a, b) => parseInt(a.year) - parseInt(b.year))
    .map((country, index) => (
      <div key={index} className="relative">
        <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-600 rounded-full shadow">
          {renderFlag(country.code, "1.2em")}
        </span>
        <div className="p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition">
          <div className="flex items-center space-x-2">
            <h4 className="text-sm font-semibold">{country.name}</h4>
            <span className="text-xs bg-teal-500/20 px-2 py-0.5 rounded-full">{country.year}</span>
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400">{country.experience}</p>
        </div>
      </div>
    ))}
</div>

            {/* Selected Country */}
            {selectedCountry && (
              <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-4">
                <div className="flex items-center space-x-3 mb-2">
                  {renderFlag(selectedCountry.code, "2em")}
                  <h4 className="text-lg font-semibold">{selectedCountry.name}</h4>
                  <span className="text-sm px-2 py-1 bg-teal-500/20 rounded-full">{selectedCountry.year}</span>
                </div>
                <p className="text-sm">{selectedCountry.experience}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes wave {
          0%, 100% { transform: rotateY(0deg) rotateX(0deg); }
          25% { transform: rotateY(5deg) rotateX(2deg); }
          50% { transform: rotateY(0deg) rotateX(-2deg); }
          75% { transform: rotateY(-5deg) rotateX(2deg); }
        }
        .animate-wave {
          animation: wave 3s ease-in-out infinite;
          transform-style: preserve-3d;
        }
      `}</style>
    </div>

  );
};

export default TravelMap;
