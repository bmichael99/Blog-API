// Root.jsx
import { useState } from "react";
import App from "./App";
import { Outlet } from "react-router-dom";

function Root() {
  //const [state, setState] = useState([]);

  return (
    <div>
      <Outlet context={{}} />
    </div>
  );
}

export default Root;