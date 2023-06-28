import { Component } from "react";
import './search-box.styles.css';


const SearchBox = ({className, placeholder, ocChangeHandler}) =>{

    return (
        <input
        className={`search-box ${className}` }
        type="search"
        placeholder={placeholder}
        onChange={ocChangeHandler}
      />
    )
} 

export default SearchBox;