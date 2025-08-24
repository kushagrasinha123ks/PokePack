import SearchBar from './components/SearchBar';
import LoadingSpinner from './components/LoadingSpinner';
import { useState, useEffect } from 'react';
import PokeCard from './components/PokeCard';
import Footer from './components/Footer';
import Banner from './components/Banner';

const App = () => {
  const [pokeList, setPokeList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');

  const handleSearch = (value) => {
    setSearch(value);
    setError('');
  }

  const handleHomeClick = () => {
    setSearch(''); 
    setError('');
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError('');
        const url = search === '' 
          ? "https://pokeapi.co/api/v2/pokemon?limit=20"
          : `https://pokeapi.co/api/v2/pokemon/${search}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Pokemon not found!`);
        }
        const data = await response.json();
        setPokeList(search === '' ? data.results : [data]);
      } catch (error) {
        setError(error);
        setPokeList([]);
      } finally {
        setLoading(false); 
      }
    };
    fetchData();
  }, [search]);

  return (
  <>
    {error ? (
      <main className="h-screen flex items-center justify-center">
        <h1 className="text-center text-red-600 text-2xl">
          {error}
        </h1>
      </main>
    ) : isLoading ? (
      <main className="h-screen flex items-center justify-center">
        <LoadingSpinner />
      </main>
    ) : (
      <>
        <Banner onHomeClick={handleHomeClick} />
        <SearchBar onSearch={handleSearch} />
        {(search === '') ? (
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 m-10 justify-items-center">
            {Array.isArray(pokeList) && 
              pokeList.map((poke, index) => (
                <PokeCard
                  key={`${index}${poke.name}`} 
                  pokeName={poke.name}
                  pokeUrl={poke.url}
                />
              ))
            }
          </div>
        ) : (
          <div className="flex justify-center items-start mt-16 mb-16 px-4">  
            <PokeCard
              key={`${pokeList[0]?.order}-${pokeList[0]?.name}`} 
              pokeName={pokeList[0]?.name}
              pokeUrl={`https://pokeapi.co/api/v2/pokemon/${pokeList[0].name}`}
            />
          </div>
        )}
        <Footer />
      </>
    )}
  </>
  );
}

export default App;
