import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Search = () => {
    let navigate = useNavigate()
    const [Keyword, setKeyword] = useState('');
    
    const searchHandler = (e) => {
        e.preventDefault()
    
    if (Keyword.trim()) {
        navigate(`/search/${Keyword}`, {
            state:{
                Keyword
            },
        })
    } else {
        navigate('/')
    }
    }    

  return (
    <form className="d-flex header__search--form" onSubmit={searchHandler}>
    <div className="header__search--box">
      <label>
        <input
          className="header__search--input"
          placeholder="Enter Product Name..."
          type="text"
          id='search_field'
          onChange={(e) => setKeyword(e.target.value)}
        />
      </label>
      <button
        className="header__search--button bg__secondary text-white"
        type="submit"
        aria-label="search button"
      >
        <svg
          className="header__search--button__svg"
          xmlns="http://www.w3.org/2000/svg"
          width="27.51"
          height="26.443"
          viewBox="0 0 512 512"
        >
          <path
            d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
            fill="none"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeWidth="32"
          ></path>
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="32"
            d="M338.29 338.29L448 448"
          ></path>
        </svg>
      </button>
    </div>
  </form>
  )
}

export default Search