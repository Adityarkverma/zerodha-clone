import React, { useEffect } from "react";
import axios from "axios";

const Logout = () => {
  useEffect(() => {
    const logoutUser = async () => {
      try {
        await axios.post(
          "http://localhost:3002/logout",
          {},
          { withCredentials: true },
        );

        window.location.href = "http://localhost:3000/login";
      } catch (error) {
        console.log("Logout error:", error);
      }
    };

    logoutUser();
  }, []);

  return null;
};

export default Logout;
