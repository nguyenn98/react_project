import React, { useState, useEffect, useRef } from 'react'
import { FiX } from 'react-icons/fi'
import './styles/style.css'
import { redirect, useNavigate } from 'react-router-dom';

const Searchscreen = (props) => {
  const { handleSearch, show, bgcolor } = props;
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      let url = searchQuery.toLowerCase().split(" ");
      console.log(url);
      if (url.length > 1) {
        url = url.join("-");
      }
      handleSearch(false);
      navigate(`/${url}`);
    }
  };
  console.log(show);

  function handleDelete() {
    handleSearch(false);
  }

  return (
    <div>
      <div className='absolute top-0'>
        <div className='search-screen opacity-90'
          style={{ width: show ? '100%' : 0, backgroundColor: bgcolor }}>
          <FiX
            className='delete-search-screen text-slate-50 h-11 w-14 transition
                      ease-in delay-700 cursor-pointer'
            style={{ marginLeft: '1260px', marginTop: '30px', opacity: show ? '80' : 0 }}
            onClick={handleDelete} />
          <input
            className='input-search-screen h-48 text-center text-5xl mt-44 focus:outline-none
                          box-border text-white opacity-100'
            style={{ marginLeft: '355px', width: show ? '50%' : 0, backgroundColor: bgcolor }}
            placeholder='Type and Hit Enter'
            value={searchQuery}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
    </div>
  )
}

export default Searchscreen