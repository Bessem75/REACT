import React from "react";

const Search = ({ setSearch, search, handleSubmit }) => {
  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="What are you looking for ?"
          onChange={e => setSearch(e.target.value)}
          value={search}
          type="text"
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Search;