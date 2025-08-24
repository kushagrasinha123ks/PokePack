import { useState, useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";

const PokeCard = (props) => {
  const { pokeName, pokeUrl } = props;
  const [Data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(pokeUrl);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [pokeUrl]);

  const getPokemonImage = () => {
    if (!Data?.sprites) return null;
    
    return (
      Data.sprites.other?.showdown?.front_shiny ||
      Data.sprites.front_shiny ||
      Data.sprites.other?.home?.front_shiny ||
      Data.sprites.front_default
    );
  };

  if (isLoading) {
    return (
        <main className="h-screen flex items-center justify-center">
            <LoadingSpinner />
        </main>
    );
  }

  if (!Data) return null;

  const pokemonImage = getPokemonImage();

  return (
    <div className="relative w-full max-w-md rounded overflow-hidden shadow-lg bg-white group cursor-pointer transition-all duration-300 hover:scale-105">
        
        <div className="relative z-10">

        <div className="relative text-center p-4 bg-gray-50">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFCE1B] to-transparent opacity-0 group-hover:opacity-60 group-hover:animate-pulse transition-all duration-500 p-[2px] rounded-t">
            <div className="w-full h-full bg-gray-50 rounded-t"></div>
            </div> 
            
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#FFCE1B] group-hover:shadow-[0_0_10px_#FFCE1B] transition-all duration-300 rounded-t"></div>
            
            <div className="relative z-10">
            {pokemonImage && (
                <img 
                src={pokemonImage} 
                alt={pokeName}
                className="mx-auto w-24 h-24 object-contain"
                />
            )}
            <h2 className="text-xl font-bold text-blue-600 mt-2">
                #{Data.id} - {pokeName.charAt(0).toUpperCase() + pokeName.slice(1)}
            </h2>
            </div>
        </div>

        <div className="p-4">
            <table className="w-full border-collapse border border-gray-400">
            <tbody>
                <tr className="bg-gray-200">
                <td className="border border-gray-400 p-2 font-bold text-center">Weight</td>
                <td className="border border-gray-400 p-2 text-red-600 text-center font-bold">
                    {Data.weight}
                </td>
                </tr>
                <tr>
                <td className="border border-gray-400 p-2 font-bold text-center">Base Experience</td>
                <td className="border border-gray-400 p-2 text-red-600 text-center font-bold">
                    {Data.base_experience || 'N/A'}
                </td>
                </tr>
                {Data.stats?.map((stat, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-200' : ''}>
                    <td className="border border-gray-400 p-2 font-bold text-center">
                    {stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1).replace('-', ' ')}
                    </td>
                    <td className="border border-gray-400 p-2 text-red-600 text-center font-bold">
                    {stat.base_stat}
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        </div>
    </div>
    );

};

export default PokeCard;