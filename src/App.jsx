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
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        let response = null;
        let responseJSON = null;
        if(search===''){
          response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
          responseJSON = await response.json();
          setPokeList(responseJSON.results);
        }
        else{
          response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`);
          responseJSON = await response.json();
          setPokeList([responseJSON]);
        }
      } catch (error) {
        setError(error);
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
          {'Pokemon not found!'}
        </h1>
      </main>
    ) : isLoading ? (
      <main className="h-screen flex items-center justify-center">
        <LoadingSpinner />
      </main>
    ) : (
      <>
        <Banner />
        <SearchBar onSearch={handleSearch}/>
        {(search === '') ? (
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 m-10 justify-items-center">
            {Array.isArray(pokeList) && 
              pokeList.map((poke, index) => (
                <PokeCard
                  key={`${index}${poke.name}`} 
                  pokeName={poke.name}
                  pokeUrl={poke.url || `https://pokeapi.co/api/v2/pokemon/${poke.name}`}
                />
              ))
            }
          </div>
        ) : (
          <div className="flex justify-center items-start mt-16 mb-16 px-4">  
            <PokeCard
              key={`${pokeList[0].order}${pokeList[0].name}`} 
              pokeName={pokeList[0].name}
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
