import React, { useState } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("Minneapolis, MN");

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            placeholder="Location"
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
