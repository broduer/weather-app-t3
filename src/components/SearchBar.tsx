import { KeyboardEventHandler, useState } from "react";
import { Search } from "react-feather";
import { IWeather } from "./WeatherViewport";

const SearchBar = ({ updateSearch, setLoading }: { updateSearch: Function, setLoading: Function }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const handleSearch: KeyboardEventHandler = async (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            try {
                setLoading();
                const response = await fetch(`/api/weather?prompt=${searchQuery}`);
                const jsonResponse = await response.json();
                updateSearch(jsonResponse);
            } catch (error) {
                console.log('Error:', error);
            }
        }
    };
    return(
        <div className="w-full grid place-content-center py-8">
            <div className="relative w-full">
                <Search className="text-[#a5a3af] absolute left-[20px] top-[14px]"/>
                <input onChange={e => setSearchQuery(e.target.value)} onKeyDown={handleSearch} className="w-full bg-white rounded-full px-4 py-3 text-gray-500 pl-14 text-lg placeholder:tracking-wide focus:outline-none shadow-lg" type="text" placeholder="Search..."/>
            </div>
        </div>
       
    );
};

export default SearchBar;