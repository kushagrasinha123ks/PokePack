import { useState } from 'react';
import Logo from '../assets/pokeball.png';

const SearchBar = ({onSearch}) => {

    const [inputValue,setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(inputValue)
    }

    return (
        <>
            <div className="relative w-full max-w-xl mx-auto bg-white rounded-full">
                <input
                    placeholder="e.g. pikachu, bulbasaur"
                    className="rounded-full w-full h-16 bg-transparent py-2 pl-8 pr-32 outline-none border-2 border-gray-100 shadow-md hover:outline-none hover:shadow-[0_0_10px_#353BC4] focus:ring-2 focus:ring-[#353BC4] focus:border-[#353BC4] transition-all duration-300"
                    type="text"
                    name="query"
                    id="query"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button
                    type="submit"
                    className="absolute inline-flex items-center h-10 px-4 py-2 text-sm text-white transition duration-150 ease-in-out rounded-full outline-none right-3 top-3 bg-[#FFCE1B] sm:px-6 sm:text-base sm:font-medium hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
                    onClick={handleSubmit}
                >
                    <img 
                        src={Logo} 
                        className="-ml-0.5 sm:-ml-1 mr-2 w-4 h-4 sm:h-5 sm:w-5"
                        alt="pokeball"
                    />
                    Search
                </button>
            </div>
        </>
    );
};

export default SearchBar;
