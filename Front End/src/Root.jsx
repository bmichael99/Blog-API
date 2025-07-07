// Root.jsx
import { useState } from "react";
import App from "./App";
import { Outlet } from "react-router-dom";
import AuthProvider from "./context/XAuthProvider";

function Root() {
  //const [state, setState] = useState([]);

  return (
    <AuthProvider>
    <div>
      <Outlet context={{}} />
    </div>
    </AuthProvider>
  );
}

export default Root;