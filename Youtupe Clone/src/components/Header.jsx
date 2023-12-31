import { useState } from "react";
import { useNavigate } from "react-router";
import { FiSearch } from "react-icons/fi";
function Header() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState();
  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      console.log(searchTerm);
      setSearchTerm('');
    }
  };
  return (
    <div className="bg-gray-900 text-white flex items-center justify-between">
      <div className="flex items-center justify-between">
        <img className="w-16 m-4 ml-16" src="/logo.png" />
        <h1 className="text-red-500 text-xl font-bold italic hidden sm:block">Yout<span className="text-white">Tube</span></h1>
      </div>
      <form onSubmit={onhandleSubmit} className="flex justify-between mr-16 items-center ">
        <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="mr-4 rounded-xl w-[200px] p-1 px-2 text-gray-900 sm:w-[250px]" placeholder="search" type="text"></input>
        <FiSearch/>
      </form>
    </div>
  )
}

export default Header
