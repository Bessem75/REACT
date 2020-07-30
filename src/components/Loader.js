import React from "react";

import loader from "../assets/loader.svg";

const Loader = () => {
  return (
    <div className="loader">
      <img alt="loader" src={loader} />
    </div>
  );
};

export default Loader;
