import React, { useState, useEffect } from 'react';
import { MdTravelExplore, MdLocationOn, MdFlag } from 'react-icons/md';

interface Country {
  name: string;
  flag: string;
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

  const visitedCountries = {
    europe: [
      { name: 'France', flag: '🇫🇷', year: '2022', experience: 'Explored Paris and the French Riviera' },
      { name: 'Belgium', flag: '🇧🇪', year: '2021', experience: 'Discovered Brussels and medieval Bruges' },
      { name: 'Germany', flag: '🇩🇪', year: '2023', experience: 'Berlin history and Bavarian culture' },
      { name: 'Switzerland', flag: '🇨🇭', year: '2022', experience: 'Alpine adventures in the Swiss Alps' },
      { name: 'Turkey', flag: '🇹🇷', year: '2020', experience: 'Istanbul\'s rich cultural heritage' },
    ],
    africa: [
      { name: 'Chad', flag: '🇹🇩', year: '2019', experience: 'Saharan landscapes and local communities' },
      { name: 'Sudan', flag: '🇸🇩', year: '2020', experience: 'Ancient Nubian archaeology' },
      { name: 'Cameroon', flag: '🇨🇲', year: '2021', experience: 'Diverse ecosystems and cultures' },
      { name: 'Nigeria', flag: '🇳🇬', year: '2018', experience: 'Lagos\' vibrant energy and Nollywood' },
      { name: 'Benin', flag: '🇧🇯', year: '2019', experience: 'Vodou traditions and colonial history' },
      { name: 'Togo', flag: '🇹🇬', year: '2019', experience: 'Coastal beauty and traditional markets' },
      { name: 'Ghana', flag: '🇬🇭', year: '2020', experience: 'Gold Coast heritage and Ashanti culture' },
      { name: 'Ethiopia', flag: '🇪🇹', year: '2021', experience: 'Ancient churches of Lalibela' },
      { name: 'Kenya', flag: '🇰🇪', year: '2022', experience: 'Safari adventures in the Maasai Mara' },
      { name: 'Rwanda', flag: '🇷🇼', year: '2023', experience: 'Mountain gorillas and resilient communities' },
      { name: 'Niger', flag: '🇳🇪', year: '2018', experience: 'Sahel region and traditional crafts' },
    ]
  };

  const MapPin = ({ country, position, onClick }: { 
    country: Country; 
    position: { x: string; y: string }; 
    onClick: (country: Country) => void;
  }) => (
    <div 
      className={`absolute w-3 h-3 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ${
        selectedCountry?.name === country.name ? 'scale-150 z-10' : 'hover:scale-125'
      }`}
      style={{ 
        left: position.x, 
        top: position.y,
      }}
      onClick={() => onClick(country)}
      title={country.name}
    >
      <div className="relative">
        <MdLocationOn className="text-red-500 text-xl drop-shadow-lg" />
        <div className="absolute inset-0 bg-red-500 rounded-full opacity-30 animate-ping"></div>
      </div>
    </div>
  );

  return (
    <div className="mb-12 sm:mb-16">
      <div className="bg-white/20 dark:bg-zinc-800/20 backdrop-blur-sm border border-white/10 dark:border-zinc-700/10 rounded-2xl p-6 sm:p-8 shadow-xl">
        
        {/* Header */}
        <div className="flex items-center mb-6">
          <MdTravelExplore className="text-teal-500 text-2xl mr-3" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">My Travels</h2>
        </div>

        {/* Layout: Side-by-side on larger screens */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Text Content - Left Side */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              I'm passionate about exploring different cultures and places. Through my travels across Africa and Europe, I've gained valuable insights into different cultures, languages, and ways of thinking.
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
                        <span className="text-lg">{country.flag}</span>
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
                        <span className="text-lg">{country.flag}</span>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">{country.name}</span>
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">{country.year}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Selected Country Detail */}
            {selectedCountry && (
              <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 dark:from-teal-400/10 dark:to-blue-400/10 border border-teal-500/20 rounded-xl p-4">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-2xl">{selectedCountry.flag}</span>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{selectedCountry.name}</h4>
                  <span className="text-sm px-2 py-1 bg-teal-500/20 text-teal-700 dark:text-teal-300 rounded-full">
                    {selectedCountry.year}
                  </span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">{selectedCountry.experience}</p>
              </div>
            )}
          </div>

          {/* Interactive Visual Map - Right Side */}
          <div className="space-y-4">
            {/* Animated Flagpoles */}
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 dark:from-green-400/10 dark:to-emerald-400/10 border border-green-500/20 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">Home & Current</h3>
              <div className="flex justify-center space-x-8">
                {/* Home Country Flagpole */}
                <div className="flex flex-col items-center">
                  <div className="relative">
                    {/* Flagpole */}
                    <div className="w-1 h-24 bg-gradient-to-b from-amber-600 to-amber-800 rounded-full shadow-lg"></div>
                    
                    {/* Flag */}
                    <div className="absolute -right-8 top-2 w-12 h-8 bg-gradient-to-r from-blue-600 via-yellow-400 to-red-600 rounded-sm shadow-lg animate-wave origin-left">
                      <div className="absolute inset-0 flex items-center justify-center text-lg">
                        🇹🇩
                      </div>
                    </div>
                    
                    {/* Flagpole Top */}
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gold-400 rounded-full shadow"></div>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 text-center font-medium">Chad<br/>(Home)</p>
                </div>

                {/* Current Country Flagpole */}
                <div className="flex flex-col items-center">
                  <div className="relative">
                    {/* Flagpole */}
                    <div className="w-1 h-24 bg-gradient-to-b from-amber-600 to-amber-800 rounded-full shadow-lg"></div>
                    
                    {/* Flag */}
                    <div className="absolute -right-8 top-2 w-12 h-8 bg-gradient-to-b from-sky-400 via-yellow-400 to-green-600 rounded-sm shadow-lg animate-wave-delayed origin-left">
                      <div className="absolute inset-0 flex items-center justify-center text-lg">
                        🇷🇼
                      </div>
                    </div>
                    
                    {/* Flagpole Top */}
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gold-400 rounded-full shadow"></div>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 text-center font-medium">Rwanda<br/>(Current)</p>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Travel Timeline</h3>
            
            {/* Visual Timeline */}
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-orange-500"></div>
              
              <div className="space-y-4">
                {[...visitedCountries.europe, ...visitedCountries.africa]
                  .sort((a, b) => parseInt(b.year) - parseInt(a.year))
                  .slice(0, 8)
                  .map((country, index) => (
                  <div key={country.name} className="relative flex items-center space-x-4 pl-8">
                    <div className="absolute left-3 w-2 h-2 bg-teal-500 rounded-full border-2 border-white dark:border-zinc-800"></div>
                    <div className="flex-1 bg-white/10 dark:bg-zinc-700/20 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">{country.flag}</span>
                          <span className="font-medium text-gray-900 dark:text-white">{country.name}</span>
                        </div>
                        <span className="text-xs text-gray-600 dark:text-gray-400">{country.year}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="text-center p-4 bg-blue-500/10 rounded-xl">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {visitedCountries.europe.length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">European Countries</div>
              </div>
              <div className="text-center p-4 bg-orange-500/10 rounded-xl">
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                  {visitedCountries.africa.length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">African Countries</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="mt-8 pt-6 border-t border-white/10 dark:border-zinc-700/10">
          <p className="text-center text-gray-700 dark:text-gray-300 italic">
            "My goal is to continue exploring new places while learning from each experience and bringing these diverse perspectives into my work and projects."
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes wave {
          0%, 100% { transform: rotateY(0deg) rotateX(0deg); }
          25% { transform: rotateY(5deg) rotateX(2deg); }
          50% { transform: rotateY(0deg) rotateX(-2deg); }
          75% { transform: rotateY(-5deg) rotateX(2deg); }
        }
        
        @keyframes wave-delayed {
          0%, 100% { transform: rotateY(0deg) rotateX(0deg); }
          25% { transform: rotateY(-5deg) rotateX(-2deg); }
          50% { transform: rotateY(0deg) rotateX(2deg); }
          75% { transform: rotateY(5deg) rotateX(-2deg); }
        }
        
        .animate-wave {
          animation: wave 3s ease-in-out infinite;
          transform-style: preserve-3d;
        }
        
        .animate-wave-delayed {
          animation: wave-delayed 3s ease-in-out infinite;
          animation-delay: 0.5s;
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
};

export default TravelMap;