import React from 'react';
import './style.scss';

const SearchContainer = () => {
  return (
    <nav>
      <form>
        <input
          type="text"
          placeholder="Title, companies, expertise or benefits"
        />
        <button type="submit">Search</button>
      </form>
    </nav>
  );
};

export default SearchContainer;
