import React, { useState, useEffect } from "react";

import { checkAuth } from "./authCheck";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const [authorized, setAuthorized] = useState(null);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verify = async () => {
      const isValid = await checkAuth();
      const data = await checkAuth();
      if (!isValid) {
        window.location.href = "/login";
      } else {
        setAuthorized(true);
        setUsername(data.username);

      }
    };
    verify();
  }, []);

  if (authorized === null) return <h2>Loading...</h2>;
  return (
    <>
      <TopBar username={username} />
      <Dashboard username={username} />
    </>
  );
};

export default Home;
